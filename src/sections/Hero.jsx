import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import hero from '../assets/images/hero.png';
import Mic from '../assets/images/own-your-mic.jpeg';
import Book from '../assets/images/book-a-consultation.png';
import Join from '../assets/images/podcast-1.jpeg';
import Hire from '../assets/images/voiceover-service.jpg';

const programs = [
  {
    title: 'Own Your Mic Program',
    image: Mic,
    link: '/own-your-mic',
    buttonText: 'Join the Own Your Mic Program',
  },
  {
    title: 'Book Kalekye for Your Event',
    image: Book,
    link: '/contact',
    buttonText: 'Book Kalekye for Your Event',
  },
  {
    title: 'Hire Kalekye to Voice Your Script',
    image: Hire,
    link: '/services',
    buttonText: 'Hire Kalekye to Voice Your Script',
  },
  {
    title: 'Conversations with Kalekye',
    image: Join,
    link: '/podcast',
    buttonText: 'Listen to Conversations with Kalekye',
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? programs.length - 1 : prevIndex - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === programs.length - 1 ? 0 : prevIndex + 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center px-6 md:px-12 font-forum bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      <div className="flex flex-col md:flex-row items-center md:justify-between w-full px-4 gap-10 md:gap-0">
        {/* Left Section (Text) */}
        <div className="relative text-center md:text-left text-white w-full md:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            Unleash the Power of Your Voice <br />
            <span className="text-lg sm:text-xl md:text-2xl font-fraunces">
              with Kalekye Mumo
            </span>
          </h1>
          <h2 className="text-sm sm:text-base md:text-lg font-light">
            Award-Winning Podcaster | Renowned Host | Voiceover Artist <br />
            Creator of Own Your Mic Program
          </h2>
        </div>

        {/* Right Section (Carousel) */}
        <div className="relative flex flex-col items-center">
          <div className="relative w-full bg-black bg-opacity-30 rounded-xl flex flex-col items-center p-4">
            <img
              src={programs[currentIndex].image}
              alt={programs[currentIndex].title}
              className="w-full h-48 md:h-64 object-contain rounded-lg transition-transform duration-300 ease-in-out"
            />
            <a
              href={programs[currentIndex].link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 bg-weird_grey text-black px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm lg:text-base hover:bg-gold hover:text-white transition"
            >
              {programs[currentIndex].buttonText}
            </a>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-xs md:text-base"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-xs md:text-base"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <p className="absolute bottom-4 lg:bottom-10 text-white text-xs md:text-sm lg:text-lg font-light opacity-80 text-center">
        Empowering Voices, Transforming Lives
      </p>
    </section>
  );
};

export default HeroSection;
