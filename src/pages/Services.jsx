import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // SEO
import { motion } from 'framer-motion'; // Animations
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import hosting from '../assets/images/hosting-services.jpg';
import voiceService from '../assets/images/voiceover-service.jpg';

// ✅ Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const ServicesPage = () => {
  return (
    <div className="bg-cream min-h-screen font-forum text-gray-800">
      {/* ✅ SEO */}
      <Helmet>
        <title>Professional Hosting & Voiceover Services | Kalekye</title>
        <meta
          name="description"
          content="Discover premium hosting and voiceover services tailored for events, brands, and projects. Book Kalekye for professional, impactful performances."
        />
      </Helmet>

      {/* ✅ Hero Section - Fully Responsive */}
      <motion.header
        className="w-full min-h-screen bg-white flex flex-col lg:flex-row items-center justify-center text-gray-800 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-20 sm:pt-24 pb-8 lg:pb-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {/* Text Content - Left Side */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pr-8 xl:pr-12 mb-6 sm:mb-8 lg:mb-0 max-w-2xl lg:max-w-none">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6">
            Elevating Events & Projects with{' '}
            <span className="text-gold">Expertise</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-light text-gray-600 mb-6 sm:mb-8 max-w-xl lg:max-w-2xl">
            From captivating hosting to compelling voiceovers, experience
            professionalism that leaves a lasting impression. Transform your
            events with the voice and presence that commands attention.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              to="/contact"
              className="bg-gold text-white font-semibold py-3 px-6 sm:px-8 rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 shadow-lg text-center text-sm sm:text-base"
            >
              Book Your Service
            </Link>
            <Link
              to="/about"
              className="border-2 border-gold text-gold font-semibold py-3 px-6 sm:px-8 rounded-lg hover:bg-gold hover:text-white transition-all duration-300 text-center text-sm sm:text-base"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Image Content - Right Side */}
        <div className="flex-1 flex justify-center lg:justify-end items-center w-full lg:w-auto">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh]">
            <img
              src={voiceService}
              alt="Kalekye Voiceover Services"
              className="w-full h-full object-cover object-center rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl"
            />
            {/* Decorative elements - Responsive */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gold/20 rounded-full blur-lg sm:blur-xl"></div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gold/10 rounded-full blur-xl sm:blur-2xl"></div>
          </div>
        </div>
      </motion.header>

      {/* ✅ Services Section - Fully Responsive */}
      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-8 sm:py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 bg-dark w-full min-h-fit"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Hosting Services Card */}
        <div className="flex flex-col items-center justify-center bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl p-4 sm:p-6 md:p-8 transform transition duration-300 hover:scale-105 text-center min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
          <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 mb-4 sm:mb-6 rounded-md sm:rounded-lg overflow-hidden">
            <img
              src={hosting}
              alt="Kalekye Hosting Services"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
            Hosting Services
          </h2>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2 text-left mx-auto w-fit mb-4 sm:mb-6">
            <li>MCee for Corporate Events, Launches and Gala Nights.</li>
            <li>Moderator for High-Profile Panels and Discussions.</li>
            <li>Podcast Host with engaging storytelling and facilitation.</li>
          </ul>
          <Link
            to="/contact"
            className="inline-block bg-gold text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded hover:bg-blackberry transition-all duration-200 text-sm sm:text-base"
            aria-label="Book Kalekye for your event"
          >
            <span className="flex items-center justify-center gap-2">
              Book Kalekye for Your Event <MdOutlineKeyboardArrowRight />
            </span>
          </Link>
        </div>

        {/* Voiceover Services Card */}
        <div className="flex flex-col items-center justify-center bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl p-4 sm:p-6 md:p-8 transform transition duration-300 hover:scale-105 text-center min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
          <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 mb-4 sm:mb-6 rounded-md sm:rounded-lg overflow-hidden">
            <img
              src={voiceService}
              alt="Kalekye Voiceover Services"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
            Voiceover Services
          </h2>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2 text-left mx-auto w-fit mb-4 sm:mb-6">
            <li>
              Professional voiceover for documentaries, commercials, and
              infomercials.
            </li>
            <li>Custom scripts delivered with precision and impact.</li>
            <li>A voice that resonates with your brand.</li>
          </ul>
          <Link
            to="/contact"
            className="inline-block bg-gold text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded hover:bg-blackberry transition-all duration-200 text-sm sm:text-base"
            aria-label="Request a voiceover"
          >
            <span className="flex items-center justify-center gap-2">
              Request a Voiceover <MdOutlineKeyboardArrowRight />
            </span>
          </Link>
        </div>
      </motion.section>

      {/* ✅ Companies I've Worked With Section - Fully Responsive */}
      <motion.section
        className="bg-gray-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            Companies I&apos;ve Worked With
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-4">
            Trusted by leading organizations and brands across various
            industries
          </p>
        </div>

        {/* Horizontal Scrolling Logos */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth scroll effect - Responsive */}
          <div className="absolute left-0 top-0 bottom-0 w-4 sm:w-6 md:w-8 lg:w-12 xl:w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-4 sm:w-6 md:w-8 lg:w-12 xl:w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          <div className="flex animate-scroll space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12 py-4 sm:py-6 md:py-8">
            {/* Company Logo Items */}
            {[
              { name: 'Sprint Business', logo: '🏢' },
              { name: 'Business.com', logo: '💼' },
              { name: 'TechCorp', logo: '⚡' },
              { name: 'Global Media', logo: '📺' },
              { name: 'Buildomo', logo: '🏗️' },
              { name: 'InnovateLab', logo: '🔬' },
              { name: 'Creative Agency', logo: '🎨' },
              { name: 'Digital Solutions', logo: '💻' },
              { name: 'Sprint Business', logo: '🏢' },
              { name: 'Business.com', logo: '💼' },
              { name: 'TechCorp', logo: '⚡' },
              { name: 'Global Media', logo: '📺' },
            ].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-5 lg:py-6 min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] group"
              >
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                    {company.logo}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-gold transition-colors duration-300 leading-tight">
                    {company.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicators - Responsive */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-1 sm:space-x-2">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold rounded-full"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-300 rounded-full"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-300 rounded-full"></div>
        </div>
      </motion.section>

      {/* ✅ Enhanced Call-to-Action - Fully Responsive */}
      <motion.section
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 bg-gradient-to-br from-dark via-gray-800 to-blackberry text-white relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {/* Background Pattern - Responsive */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 sm:top-6 lg:top-10 left-4 sm:left-6 lg:left-10 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gold rounded-full blur-2xl sm:blur-3xl"></div>
          <div className="absolute bottom-4 sm:bottom-6 lg:bottom-10 right-4 sm:right-6 lg:right-10 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gold/50 rounded-full blur-2xl sm:blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-8 sm:mb-10 lg:mb-12"
            variants={fadeUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gold to-white bg-clip-text text-transparent">
              Ready to Elevate Your Next Project?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-4">
              From corporate events to compelling voiceovers, let&apos;s create
              something extraordinary together. Your vision deserves the
              professional touch that only Kalekye can deliver.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-gold to-gold/80 text-dark font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl shadow-xl sm:shadow-2xl hover:shadow-gold/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 w-full sm:w-auto sm:min-w-[180px] lg:min-w-[200px] text-center"
            >
              <span className="flex items-center justify-center gap-2 text-sm sm:text-base">
                Book Your Service <MdOutlineKeyboardArrowRight />
              </span>
            </Link>

            <Link
              to="/about"
              className="group border-2 border-gold text-gold font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl hover:bg-gold hover:text-dark transition-all duration-300 w-full sm:w-auto sm:min-w-[180px] lg:min-w-[200px] text-center"
            >
              <span className="text-sm sm:text-base">
                Learn More About Kalekye
              </span>
            </Link>
          </motion.div>

          {/* Trust Indicators - Responsive */}
          <motion.div
            className="mt-12 sm:mt-14 lg:mt-16 pt-6 sm:pt-8 border-t border-gray-700"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold/20 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                  Professional Quality
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Premium services that exceed expectations
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold/20 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                  Timely Delivery
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Always on time, every time
                </p>
              </div>

              <div className="flex flex-col items-center sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold/20 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                  Personal Touch
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Tailored to your unique needs
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;
