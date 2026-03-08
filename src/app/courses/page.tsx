import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Trading Courses - MT5Gold",
  description:
    "Free trading education: lessons, market analysis, and strategy breakdowns. Learn gold trading with practical examples.",
};

const playlists = [
  {
    title: "Trading Lessons",
    description:
      "Core trading concepts, strategy development, risk management, and technical analysis fundamentals.",
    playlistId: "PLxxxxxxx", // TODO: Replace with actual playlist ID
    videos: [
      {
        title: "Introduction to Gold Trading",
        videoId: "dQw4w9WgXcQ", // TODO: Replace with actual video IDs
        duration: "12:34",
      },
    ],
  },
  {
    title: "Daily Market Analysis",
    description:
      "Daily XAUUSD analysis covering key levels, bias direction, and potential trade setups.",
    playlistId: "PLyyyyyyy", // TODO: Replace with actual playlist ID
    videos: [
      {
        title: "Latest Analysis",
        videoId: "dQw4w9WgXcQ", // TODO: Replace
        duration: "8:15",
      },
    ],
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Free Trading Courses
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Learn gold trading from practical experience. No fluff, no upsells -
            just real education.
          </p>
        </div>

        {playlists.map((playlist) => (
          <div key={playlist.title} className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-2">
              {playlist.title}
            </h2>
            <p className="text-gray-400 mb-8">{playlist.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {playlist.videos.map((video) => (
                <a
                  key={video.videoId}
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-white/10 overflow-hidden hover:border-gold-500/30 transition-all"
                >
                  <div className="aspect-video bg-navy-800 relative">
                    <img
                      src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-gold-500/90 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-navy-950 ml-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-white group-hover:text-gold-400 transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* YouTube CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@ImmuneTraders"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-red-500/30 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
              <path fill="#080B1A" d="M9.545 15.568V8.432L15.818 12z" />
            </svg>
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
