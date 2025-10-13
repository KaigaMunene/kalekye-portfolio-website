import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';
import empowerOne from '../assets/images/empower-1.png';
import empowerTwo from '../assets/images/empower-2.png';
import empowerThree from '../assets/images/empower-3.png';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const empowerImages = [
  { src: empowerTwo, alt: 'Podcasting' },
  { src: empowerOne, alt: 'Event hosting' },
  { src: empowerThree, alt: 'Voiceover recording' },
];

const AboutPage = () => {
  return (
    <section>
      <div className="bg-white text-gray-800">
        {/* HEADER */}
        <header className="text-gold pt-12 px-4" id="about-section">
          <div className="container mx-auto text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              A Voice That Inspires, A Mentor That Transforms
            </h1>
            <p className="text-base md:text-lg font-light">
              Empowering Voices, Creating Impact
            </p>
          </div>
        </header>

        {/* MAIN SECTION */}
        <main className="container mx-auto p-6 md:p-8 font-forum">
          <section className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-12 mb-12">
            {/* TEXT CONTENT */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                Meet Kalekye Mumo
              </h2>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed text-start max-w-3xl mx-auto">
                With over 15 years in Kenyan mainstream media, I&apos;ve earned
                the title <span className="font-semibold">Queen of Media</span>{' '}
                for my ability to captivate audiences through dynamic
                communication. As a celebrated event host, panel moderator, and
                voiceover artist, I bring professionalism and charisma to every
                stage and microphone. My voice has inspired laughter, sparked
                change, and created unforgettable moments—whether on radio, TV,
                or live events.
              </p>

              <motion.div
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                initial="initial"
                className="inline-block"
                variants={{
                  initial: { scale: 1 },
                  hover: { scale: 1.05 },
                }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to="/about"
                  className="mt-6 inline-flex items-center bg-gold text-white font-semibold px-5 py-2 md:px-6 md:py-3 rounded-xl hover:bg-dark hover:text-white transition duration-300 group"
                >
                  Read more
                  <motion.div
                    className="ml-2"
                    variants={{
                      initial: { rotate: 0 },
                      hover: { rotate: 90 },
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <MdOutlineKeyboardArrowRight className="inline-block" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            {/* IMAGE CAROUSEL */}
            <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
              <Carousel images={empowerImages} />
            </div>
          </section>
        </main>
      </div>
    </section>
  );
};

export default AboutPage;
