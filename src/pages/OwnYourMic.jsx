import { Helmet } from 'react-helmet-async';
import { useRef } from 'react';
import VoiceOver from '../assets/images/voiceover.jpeg';
import Host from '../assets/images/host-program.jpeg';
import Public from '../assets/images/public-speaking.jpeg';
import VideoSlider from '../components/VideoGallery';
import Testimonial from '../sections/Testimonial';
import OwnYourMicImage from '../assets/images/own-your-mic.jpeg';

const programs = [
  {
    id: 1,
    title: 'The Host Program',
    description:
      'Learn to command the stage as a professional host or moderator. Ideal for podcast/show hosts and panel moderators.',
    image: Host,
    registerLink: '#',
  },
  {
    id: 2,
    title: 'Public Speaking Program',
    description:
      'Build confidence, clarity, and impact in your speeches no matter your speaking engagement. Overcome stage fear and connect with any audience.',
    image: Public,
    registerLink: '#',
  },
  {
    id: 3,
    title: 'Voice Over Program',
    description:
      'Discover techniques to create compelling voiceover work. Tailored for commercials, documentaries, and infomercials.',
    image: VoiceOver,
    registerLink: '#',
  },
];

const OwnYourMic = () => {
  const programsSectionRef = useRef(null);

  const scrollToPrograms = () => {
    programsSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="bg-weird_grey min-h-screen font-antic-didone">
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* Hero Section - Fully Responsive */}
      <section className="w-full min-h-screen bg-white flex flex-col lg:flex-row items-center justify-center text-dark px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-20 sm:pt-24 pb-8 lg:pb-0">
        {/* Text Content - Left Side */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pr-8 xl:pr-12 mb-6 sm:mb-8 lg:mb-0 max-w-2xl lg:max-w-none">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6">
            Master the Art of Communication with{' '}
            <span className="text-gold">Own Your Mic Programs</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-light text-gray-600 mb-6 sm:mb-8 max-w-xl lg:max-w-2xl">
            Empowering individuals to host, speak, and deliver with confidence.
            Transform your communication skills and own every stage you step on.
          </p>
          <div className="flex justify-center w-full">
            <button
              onClick={scrollToPrograms}
              className="bg-gold text-white font-semibold py-3 px-8 rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base flex items-center gap-2"
            >
              Scroll Down to Learn More
              <svg
                className="w-5 h-5 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Image Content - Right Side */}
        <div className="flex-1 flex justify-center lg:justify-end items-center w-full lg:w-auto">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh]">
            <img
              src={OwnYourMicImage}
              alt="Own Your Mic - Communication Training"
              className="w-full h-full object-cover object-center rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl"
            />
            {/* Decorative elements - Responsive */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gold/20 rounded-full blur-lg sm:blur-xl"></div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gold/10 rounded-full blur-xl sm:blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* Programs Section - Fully Responsive */}
      <section
        ref={programsSectionRef}
        className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 lg:mb-10 underline">
          Programs Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-cream shadow-xl rounded-lg sm:rounded-xl overflow-hidden transition-transform transform hover:scale-105 duration-300 flex flex-col h-full"
            >
              {/* Image */}
              <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 text-center flex flex-col flex-grow">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">
                  {program.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex-grow leading-relaxed">
                  {program.description}
                </p>
                <div className="mt-auto">
                  <a
                    href={program.registerLink}
                    className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gold text-white font-medium rounded-lg hover:bg-dark transition duration-300 text-sm sm:text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Video Section - Fully Responsive */}
      <section className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark text-center mb-6 sm:mb-8 lg:mb-10 underline">
            See the Programs in Action
          </h2>
          <div className="w-full">
            <VideoSlider />
          </div>
        </div>
      </section>

      {/* Testimonial Section - Responsive */}
      <div className="bg-cream">
        <Testimonial />
      </div>
    </div>
  );
};

export default OwnYourMic;
