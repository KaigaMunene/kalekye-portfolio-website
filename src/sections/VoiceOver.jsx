import img from '../assets/images/voiceover.jpeg';
const VoiceOver = () => {
  return (
    <div className="bg-cream min-h-screen p-24 h-screen px-6 md:px-16 lg:px-24 font-forum text-gray-900">
      {/* Headline Section */}
      <header className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          Master the Art of Communication with{' '}
          <span className="text-gold">Own Your Mic</span>
        </h1>
        <p className="text-lg md:text-xl font-light max-w-3xl mx-auto">
          Empowering individuals to host, speak, and deliver with confidence.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold m-4 text-blackberry">
          Host Program
        </h2>
      </header>

      {/* Host Program Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <img
            src={img}
            alt="Own Your Mic Host Program"
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
            loading="lazy"
          />
        </div>

        {/* Right Content - Image */}
        <div className="flex flex-col justify-center items-start">
          <p className="text-gray-700 mb-6">
            Learn to command the stage as a professional host or moderator.
            Ideal for podcast/show hosts and panel moderators.
          </p>
          <a
            href="#host-program"
            className="inline-block px-6 py-3 bg-gold text-white font-medium rounded-lg hover:bg-blackberry transition duration-300"
            aria-label="Learn more about The Host Program"
          >
            Register
          </a>
        </div>
      </section>
    </div>
  );
};

export default VoiceOver;
