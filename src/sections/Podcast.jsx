import img from "../assets/images/voiceover-service-1.jpg"

const PodcastPage = () => {
  return (
    <div className="bg-[#f8f6f3] text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            A quick and easy way to listen to your most favorite <span className="text-brown underline">podcast</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore the latest top-notch stories from a worldwide community and verified tech creators.
          </p>
          <button className="mt-6 bg-gold text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-600 transition">
            Subscribe Now
          </button>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={img}
            alt="Podcast Microphone"
            className="w-full h-80 object-contain md:max-w-lg"
          />
        </div>
      </section>
      
      {/* Weekly Popular Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Episodes</h2>
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
