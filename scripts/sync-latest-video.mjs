#!/usr/bin/env node
// Checks YouTube playlist for new videos, updates video-history.json if new video found
import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

const PLAYLIST_ID = 'PL0jl9MLZ-srbzGxfFgGZxA6nw46nt6Bh2';
const HISTORY_PATH = 'src/data/video-history.json';
const LATEST_PATH = 'src/data/latest-video.json';

async function main() {
  try {
    // Fetch playlist RSS
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?playlist_id=${PLAYLIST_ID}`);
    const xml = await res.text();

    // Extract latest video
    const videoIdMatch = xml.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
    const titleMatch = xml.match(/<entry>[\s\S]*?<title>([^<]+)<\/title>/);
    const publishedMatch = xml.match(/<entry>[\s\S]*?<published>([^<]+)<\/published>/);

    if (!videoIdMatch) {
      console.log('No video found in playlist');
      process.exit(0);
    }

    const videoId = videoIdMatch[1];
    const title = titleMatch ? titleMatch[1] : 'Unknown';
    const published = publishedMatch ? publishedMatch[1] : '';
    
    // Extract date from title (e.g., "Mar 13, 2026") or from published date
    const dateStr = published.substring(0, 10); // YYYY-MM-DD
    
    // Load current history
    const history = JSON.parse(readFileSync(HISTORY_PATH, 'utf8'));
    
    // Check if this video is already in history
    const existingIds = Object.values(history).map(v => v.id);
    if (existingIds.includes(videoId)) {
      console.log(`Video already in history: ${title} (${videoId})`);
      process.exit(0);
    }

    // Check if we already have an entry for today
    if (history[dateStr]) {
      console.log(`Date ${dateStr} already has a video, adding as new entry`);
    }

    // Add to history (prepend)
    const newHistory = { [dateStr]: { id: videoId, title }, ...history };
    writeFileSync(HISTORY_PATH, JSON.stringify(newHistory, null, 2));
    
    // Update latest-video.json
    writeFileSync(LATEST_PATH, JSON.stringify({
      id: videoId,
      title,
      thumbnail: `https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`
    }, null, 2));

    console.log(`NEW VIDEO ADDED: ${title} (${videoId}) for ${dateStr}`);
    
    // Git commit and push (triggers GitHub Actions deploy)
    execSync('git add -A', { stdio: 'inherit' });
    execSync(`git commit -m "Auto-sync: new YouTube video ${dateStr}"`, { stdio: 'inherit' });
    execSync('git push origin main', { stdio: 'inherit' });
    
    console.log('Pushed to GitHub — deploy triggered');
    
  } catch (e) {
    console.error('Error:', e.message);
    process.exit(1);
  }
}

main();
