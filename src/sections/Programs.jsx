import hostProgram from '../assets/images/host-program.jpeg';
import publicSpeaking from '../assets/images/public-speaking.jpeg';
import voiceOver from '../assets/images/voiceover.jpeg';
import VideoSlider from '../components/VideoSlider';

const OwnYourMicPrograms = () => {
  return (
    <div className="font-forum">
      {/* Hero Section */}
      <section
        id="own-your-mic"
        className="bg-gold text-white text-center py-12 px-6"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
          Master the Art of Communication with Own Your Mic
        </h1>
        <p className="text-lg md:text-xl font-light max-w-3xl mx-auto">
          Empowering Individuals to Host, Speak, and Deliver with Confidence
        </p>
      </section>

      {/* Feature Section */}
      <section className="bg-cream py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
            Programs Overview
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Host Program */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300">
              <img
                src={hostProgram}
                alt="Host Program - Own Your Mic"
                className="rounded-md mb-4 w-full max-w-sm object-contain"
              />
              <h3 className="text-xl font-bold text-dark mb-4">
                The Host Program
              </h3>
              <p className="text-gray-600">
                Learn to command the stage as a professional host or moderator.
                Ideal for podcast/show hosts and panel moderators.
              </p>
            </div>

            {/* Public Speaking Program */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300">
              <img
                src={publicSpeaking}
                alt="Public Speaking Program - Own Your Mic"
                className="rounded-md mb-4 w-full max-w-sm object-contain"
              />
              <h3 className="text-xl font-bold text-dark mb-4">
                The Public Speaking Program
              </h3>
              <p className="text-gray-600">
                Build confidence, clarity, and impact in your speeches no matter
                your speaking engagement. Overcome stage fear and connect with
                any audience.
              </p>
            </div>

            {/* Voiceover Program */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300">
              <img
                src={voiceOver}
                alt="Voiceover Program - Own Your Mic"
                className="rounded-md mb-4 w-full max-w-sm object-contain"
              />
              <h3 className="text-xl font-bold text-dark mb-4">
                The Voiceover Program
              </h3>
              <p className="text-gray-600">
                Discover techniques to create compelling voiceover work.
                Tailored for commercials, documentaries, and infomercials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-cream text-black text-center py-6 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Communication Skills?
          </h2>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfrCvQgpZ4f4d5LEjgYm0eSZT-4-fhslhTlX3B0-RqWOf2CKA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gold text-white font-medium rounded-lg hover:bg-gold-dark transition duration-300"
            aria-label="Join Own Your Mic Programs"
          >
            Join Own Your Mic Programs
          </a>
        </div>
      </section>

      {/* Promotional Video Section */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-dark text-center mb-6">
            See the Programs in Action
          </h2>
          <div className="w-full">
            <VideoSlider />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OwnYourMicPrograms;
