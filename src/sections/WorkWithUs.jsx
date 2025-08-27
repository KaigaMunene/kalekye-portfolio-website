import { Helmet, HelmetProvider } from 'react-helmet-async';
import ownYourMic from '../assets/images/own-your-mic.jpeg';
import subscribePodcast from '../assets/images/podcast-1.jpeg';
import bookConsultation from '../assets/images/book-a-consultation.png';

const WorkWithUs = () => {
  return (
    <HelmetProvider>
      <div className="bg-gray-50 min-h-screen py-10">
        {/* SEO Meta Tags */}
        <Helmet>
          <title>Work With Kalekye Mumo | Create Magic Together</title>
          <meta
            name="description"
            content="Collaborate with Kalekye Mumo through the Own Your Mic Program, consultations, or her podcast. Let's create magic together!"
          />
          <meta
            name="keywords"
            content="Kalekye Mumo, Own Your Mic, consultations, podcast, work with Kalekye"
          />
          <meta name="author" content="Kalekye Mumo" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>

        {/* Container */}
        <div className="container font-forum mx-auto px-6 md:px-12 lg:px-20">
          {/* Headline Section */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
              Let’s Create Magic Together
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Collaborate with Kalekye Mumo to unlock your potential and create
              something extraordinary.
            </p>
          </div>

          {/* Options Section */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            {/* Option 1: Own Your Mic Program */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transform transition duration-300 flex flex-col items-center p-6">
              <img
                src={ownYourMic}
                alt="Own your mic advert"
                className="rounded-md mb-4 w-full max-w-sm object-contain"
              />
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center">
                Join the Own Your Mic Program
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-4 text-center">
                Discover your voice, own your space, and make an impact through
                this empowering program.
              </p>
              <a
                href="/own-your-mic"
                className="mt-auto px-6 py-3 bg-gold text-white font-medium rounded-lg hover:bg-blackberry transition duration-300"
                aria-label="Join the Own Your Mic Program"
              >
                Learn More
              </a>
            </div>

            {/* Option 2: Book a Consultation */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transform transition duration-300 flex flex-col items-center p-6">
              <img
                src={bookConsultation}
                alt="book a consultation details"
                className="rounded-md mb-4 w-full h-96 max-w-sm object-contain"
              />
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center">
                Book a Consultation
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-4 text-center">
                Let’s discuss your goals and how we can work together to achieve them.
              </p>
              <a
                href="/contact"
                className="mt-auto px-6 py-3 bg-gold text-white font-medium rounded-lg hover:bg-blackberry transition duration-300"
                aria-label="Book a Consultation"
              >
                Get Started
              </a>
            </div>

            {/* Option 3: Subscribe to the Podcast */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transform transition duration-300 flex flex-col items-center p-6">
              <img
                src={subscribePodcast}
                alt="Lets have a conversation with Kalekye"
                className="rounded-md mb-4 w-full max-w-sm object-contain"
              />
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center">
                Subscribe to the Podcast
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-4 text-center">
                Stay inspired and informed by subscribing to Kalekye Mumo’s engaging podcast series.
              </p>
              <a
                href="https://open.spotify.com/show/4oWZvTW6T3hOISr0mMlGEu?si=dacf9828831743dd"
                target='_blank'
                rel='noreferrer'
                className="mt-auto px-6 py-3 bg-gold text-white font-medium rounded-lg hover:bg-blackberry transition duration-300"
                aria-label="Subscribe to the Podcast"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default WorkWithUs;
