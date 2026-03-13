// Fetch latest YouTube video info and write to a JSON file for build-time use
import { writeFileSync } from 'fs';

const PLAYLIST_ID = 'PL0jl9MLZ-srbzGxfFgGZxA6nw46nt6Bh2';

async function main() {
  try {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?playlist_id=${PLAYLIST_ID}`);
    const xml = await res.text();

    const videoIdMatch = xml.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
    const titleMatch = xml.match(/<entry>[\s\S]*?<title>([^<]+)<\/title>/);

    if (videoIdMatch) {
      const data = {
        id: videoIdMatch[1],
        title: titleMatch ? titleMatch[1] : null,
        thumbnail: `https://i3.ytimg.com/vi/${videoIdMatch[1]}/maxresdefault.jpg`,
      };
      writeFileSync('src/data/latest-video.json', JSON.stringify(data, null, 2));
      console.log(`Latest video: ${data.title} (${data.id})`);
    }
  } catch (e) {
    console.error('Failed to fetch latest video:', e.message);
    // Write fallback
    writeFileSync('src/data/latest-video.json', JSON.stringify({ id: null, title: null, thumbnail: null }));
  }
}

main();
