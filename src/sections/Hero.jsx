import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion'; // ✅ install if not already: pnpm add framer-motion
import hero from '../assets/images/hero.png';
import About from '../sections/About';

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 100; // 100px offset for navbar

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-end font-forum bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content */}
        <div className="relative w-full flex justify-center pb-20 px-6 text-center">
          <div className="max-w-4xl">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Unleash the Power of Your Voice <br />
              <span className="text-lg sm:text-xl md:text-2xl font-fraunces font-light">
                with Kalekye Mumo
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-sm sm:text-base md:text-lg font-light text-white">
              Award-Winning Podcaster | Renowned Host | Voiceover Artist <br />
              Creator of Own Your Mic Program
            </h2>

            {/* Tagline */}
            <p className="mt-4 text-sm sm:text-base md:text-lg italic font-light text-gray-300">
              Empowering Voices, Transforming Lives
            </p>
          </div>
        </div>

        {/* Floating Scroll Arrow with Fade-in */}
        <motion.button
          onClick={scrollToNext}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white hover:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
        >
          <ChevronDown size={40} strokeWidth={2.5} className="animate-bounce" />
        </motion.button>
      </section>

      {/* Next Section */}
      <section>
        <About />
      </section>
    </div>
  );
};

export default HeroSection;
