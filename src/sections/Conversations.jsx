const PodcastSection = () => {
  return (
    <section
      className="bg-gray-50 py-12 px-6"
      aria-labelledby="podcast-heading"
    >
      {/* Headline Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 md:text-5xl">
          Discover Conversations That Matter
        </h2>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          A space for deep, meaningful discussions about relationships, life,
          and career.
        </p>
        <p className="mt-2 text-indigo-600 font-medium text-sm md:text-base">
          Proud Winner of the 2024 Podcast Excellence Award
        </p>
      </div>

      {/* Podcast Player and Highlights */}
      <div className="max-w-7xl mx-auto mt-12 space-y-8 px-4">
        {/* Video Highlights */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Episode Highlights
          </h3>
          <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <iframe
              className="w-full md:w-[75%] h-[315px] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/videoseries?si=Q8LZsUe-7mUEAXXD&amp;list=PLpTdl0lbxSrZDEd17de6gWC3algkWcgkp"
              title="YouTube Playlist"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <a
              href="https://www.youtube.com/playlist?list=PLpTdl0lbxSrZDEd17de6gWC3algkWcgkp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-red-700 transition"
            >
              Watch and Subscribe
            </a>
          </div>
        </div>

        {/* Podcast Player */}
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-4">
          <iframe
            className="w-full md:w-[75%] rounded-xl"
            src="https://open.spotify.com/embed/show/4oWZvTW6T3hOISr0mMlGEu?utm_source=generator"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <a
            href="https://open.spotify.com/show/4oWZvTW6T3hOISr0mMlGEu?si=dacf9828831743dd"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-700 transition"
          >
            Listen on Spotify
          </a>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
