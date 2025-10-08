import Podcast from '../assets/images/podcast-1.jpeg';

const PodcastPage = () => {
  return (
    <div className="bg-weird_grey text-gray-900 font-forum">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-24 md:pt-28 pb-16 gap-10">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-primary_text_color mb-4">
            Discover Conversations that matter with{' '}
            <span className="text-indigo-700">Kaleyke Mumo</span>
          </h2>
          <p className="mt-2 text-indigo-600 font-medium text-sm md:text-base">
            Proud Winner of the 2024 Podcast Excellence Award
          </p>
          <p className="text-primary_text_color leading-relaxed mb-6 md:mb-8">
            A space for deep, meaningful discussions about relationships, life,
            and career.
          </p>
          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            <a
              href="https://www.youtube.com/playlist?list=PLpTdl0lbxSrZDEd17de6gWC3algkWcgkp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-red-700 transition"
            >
              Watch and Subscribe
            </a>
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

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src={Podcast}
            alt="Podcast with Kaleyke Mumo"
            className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Weekly Popular Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-extrabold underline mb-10 text-center md:text-left">
          Latest Episodes
        </h2>

        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-stretch gap-8">
          {/* YouTube Playlist */}
          <div className="flex-1">
            <iframe
              className="w-full h-[250px] md:h-[315px] rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/videoseries?si=Q8LZsUe-7mUEAXXD&amp;list=PLpTdl0lbxSrZDEd17de6gWC3algkWcgkp"
              title="YouTube Playlist"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Spotify Player */}
          <div className="flex-1">
            <iframe
              className="w-full h-[352px] md:h-[315px] rounded-xl shadow-lg bg-blue-950"
              src="https://open.spotify.com/embed/show/4oWZvTW6T3hOISr0mMlGEu?utm_source=generator"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PodcastPage;
