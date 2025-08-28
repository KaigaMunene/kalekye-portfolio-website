import Carousel from '../components/Carousel';
import empowerOne from '../assets/images/empower-1.png';
import empowerTwo from '../assets/images/empower-2.png';
import empowerThree from '../assets/images/empower-3.png';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight }  from 'react-icons/md';

const empowerImages = [
  { src: empowerTwo, alt: 'Podcasting' },
  { src: empowerOne, alt: 'Event hosting' },
  { src: empowerThree, alt: 'Voiceover recording' },
];

const AboutPage = () => {
  return (
    <section>
      <div className="max-h-screen bg-white text-gray-800">
        <header className=" text-gold pt-12">
          <div className="container mx-auto  text-center">
            <h1 className="text-4xl font-bold mb-4">
              A Voice That Inspires, A Mentor That Transforms
            </h1>
            <p className="text-lg font-light">
              Empowering Voices, Creating Impact
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 font-forum">
          <section className="flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center gap-12 mb-12">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-center mb-6">
                Meet Kalekye Mumo
              </h2>
              <p className="text-lg leading-relaxed text-start max-w-3xl mx-auto">
                With over 15 years in Kenyan mainstream media, I&apos;ve earned
                the title Queen of Media for my ability to captivate audiences
                through dynamic communication. As a celebrated event host, panel
                moderator, and voiceover artist, I bring professionalism and
                charisma to every stage and microphone. My voice has inspired
                laughter, sparked change, and created unforgettable
                moments—whether on radio, TV, or live events.
              </p>

              <button>
                <Link
                  to="/about"
                  className="mt-6 inline-block bg-brown text-white font-semibold px-6 py-3 rounded hover:bg-dark hover:text-gold transition"
                >
                  Read more{' '}
                  <MdOutlineKeyboardArrowRight className="inline-block ml-2" />
                </Link>
              </button>
            </div>
            <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
              <Carousel images={empowerImages} />
            </div>
          </section>
        </main>
      </div>
    </section>
  );
};

export default AboutPage;
