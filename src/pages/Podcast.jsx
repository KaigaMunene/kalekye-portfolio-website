import Podcast from '../assets/images/podcast-1.jpeg';

const PodcastPage = () => {
  return (
    <div className="bg-weird_grey text-gray-900 font-forum">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-around px-6 md:px-20 py-16">
        {/* Text Content */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content Section */}
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-bold text-primary_text_color mb-4">
              Conversations with Kalekye
            </h2>
            <p className="text-primary_text_color leading-relaxed mb-4">
              Seat, Talk, Inspire
            </p>
            <p className="text-primary_text_color leading-relaxed mb-6">
              Where we talk about emerging issues and give inspiration stories that encourage others to keep on going.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
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
          <div className="relative flex justify-center">
            <div className=" p-4">
              <img
                src={Podcast}
                alt="Freelance Web Designer"
                className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Popular Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-extrabold underline mb-8">Latest Episodes</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">Design mistake in UI</h3>
            <p className="text-gray-600">by Jonathon Vin</p>
            <p className="mt-2">43:00</p>
          </div>
          <div className="bg-orange-100 p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">Everyday life</h3>
            <p className="text-gray-600">by Karry Jim</p>
            <p className="mt-2">50:21</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl">Make it work</h3>
            <p className="text-gray-600">by Jonathon Vin</p>
            <p className="mt-2">38:00</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PodcastPage;
