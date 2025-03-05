import { Helmet, HelmetProvider } from 'react-helmet-async';
import hostProgram from '../assets/images/host-program.jpeg';
import publicSpeaking from '../assets/images/public-speaking.jpeg';
import voiceOver from '../assets/images/voiceover.jpeg';
import VideoSlider from '../components/VideoSlider';

const OwnYourMicPrograms = () => {
  return (
    <HelmetProvider>
      <div className="bg-gray-50 min-h-screen font-antic-didone">
        {/* SEO Meta Tags */}
        <Helmet>
          <title>Own Your Mic Programs | Master the Art of Communication</title>
          <meta
            name="description"
            content="Empowering individuals to host, speak, and deliver with confidence. Join Own Your Mic Programs to enhance your communication skills today."
          />
          <meta
            name="keywords"
            content="Own Your Mic, communication skills, public speaking, hosting, voiceover, Kalekye Mumo"
          />
          <meta name="author" content="Kalekye Mumo" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Helmet>

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
        <section className="bg-cream py-12 px-6 container mx-auto">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 text-center mb-8">
            Programs Overview
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Host Program */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden items-center justify-center p-6 flex flex-col text-center hover:shadow-2xl transition duration-300">
              <img
                src={hostProgram}
                alt="Own your mic advert"
                className="rounded-md mb-4 w-full max-w-sm object-contain"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                The Host Program
              </h3>
              <p className="text-gray-600 mb-6">
                Learn to command the stage as a professional host or moderator.
                Ideal for podcast/show hosts and panel moderators.
              </p>
            </div>

            {/* Public Speaking Program */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 flex flex-col items-center justify-center text-center hover:shadow-2xl transition duration-300">
              <img
                src={publicSpeaking}
                alt="Own your mic advert"
                className="rounded-md mb-4 w-full max-w-sm object-contain"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                The Public Speaking Program
              </h3>
              <p className="text-gray-600 mb-6">
                Build confidence, clarity, and impact in your speeches no matter
                your speaking engagement. Overcome stage fear and connect with
                any audience.
              </p>
            </div>

            {/* Voiceover Program */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden items-center justify-center p-6 flex flex-col text-center hover:shadow-2xl transition duration-300">
              <img
                src={voiceOver}
                alt="Own your mic advert"
                className="rounded-md mb-4 w-full max-w-sm object-contain"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                The Voiceover Program
              </h3>
              <p className="text-gray-600 mb-6">
                Discover techniques to create compelling voiceover work.
                Tailored for commercials, documentaries, and infomercials.
              </p>
            </div>
          </div>

          {/* Call to Action Section */}
          <section className="bg-cream text-black text-center mt-8 py px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Ready to Transform Your Communication Skills?
            </h2>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfrCvQgpZ4f4d5LEjgYm0eSZT-4-fhslhTlX3B0-RqWOf2CKA/viewform?usp=header"
              target='_blank'
              rel="noreferrer"
              className="inline-block px-8 py-4 bg-gold text-white font-medium rounded-lg hover:bg-dark hover:text-white transition duration-300"
              aria-label="Join Own Your Mic Programs"
            >
              Join Own Your Mic Programs
            </a>
          </section>
        </section>

        {/* Promotional Video Section */}
        <section className="bg-gray-100 py-2 px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 text-center mb-4">
            See the Programs in Action
          </h2>
          <div className="container mx-auto w-full">
            <VideoSlider />
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
};

export default OwnYourMicPrograms;
