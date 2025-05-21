import { Helmet } from 'react-helmet-async';
import VoiceOver from '../assets/images/voiceover.jpeg';
import Host from '../assets/images/host-program.jpeg';
import Public from '../assets/images/public-speaking.jpeg';
import VideoSlider from '../components/VideoSlider';
import Testimonial from '../sections/Testimonial';

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
  return (
    <div className="bg-weird_grey min-h-screen font-antic-didone pt-24">
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

      {/* Hero Section */}
      <section className="bg-cream text-gray-900 py-12 px-6 md:px-16 lg:px-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Master the Art of Communication with{' '}
          <span className="text-gold">Own Your Mic Programs</span>
        </h1>
        <p className="text-lg md:text-xl font-light max-w-3xl mx-auto">
          Empowering individuals to host, speak, and deliver with confidence.
        </p>
      </section>

      {/* Programs Section */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="grid gap-10 md:grid-flow-row lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-cream shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 flex flex-col h-full"
            >
              {/* Image */}
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-96 object-cover"
              />

              {/* Content */}
              <div className="p-6 text-center flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-3 text-gray-900">
                  {program.title}
                </h2>
                <p className="text-gray-600 mb-4 flex-grow">
                  {program.description}
                </p>
                <div className="mt-auto">
                  <a
                    href={program.registerLink}
                    className="inline-block px-6 py-3 bg-gold text-white font-medium rounded-lg hover:bg-dark transition duration-300"
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

      <div>
        <Testimonial />
      </div>
    </div>
  );
};

export default OwnYourMic;
