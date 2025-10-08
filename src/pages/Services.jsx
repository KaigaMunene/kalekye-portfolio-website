import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // SEO
import { motion } from 'framer-motion'; // Animations
// import { CheckCircle } from 'lucide-react'; // Icons
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

// const services = [
//   {
//     id: 1,
//     title: 'Hosting Services',
//     description:
//       'Engage, entertain, and inspire your audience with professional hosting tailored for every occasion.',
//     features: [
//       'MCee for corporate events, launches, and gala nights.',
//       'Moderator for high-profile panels and discussions.',
//       'Podcast host with engaging storytelling and facilitation.',
//     ],
//     image: hosting,
//     cta: 'Book Kalekye for Your Event',
//     link: '/contact',
//   },
//   {
//     id: 2,
//     title: 'Voiceover Services',
//     description:
//       'Bring scripts to life with a commanding and versatile voice that resonates across industries.',
//     features: [
//       'Professional voiceover for documentaries, commercials, and infomercials.',
//       'Custom scripts delivered with precision and impact.',
//     ],
//     image: voiceService,
//     cta: 'Request a Voiceover',
//     link: '/contact',
//   },
// ];

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

      {/* ✅ Hero Section */}
      <motion.header
        className="flex flex-col-reverse md:flex-row items-center justify-around gap-10 py-16 px-6 bg-gradient-to-b from-gold/10 to-transparent"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {/* Text Section */}

        <div className="">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Elevating Events & Projects with Expertise
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
            From captivating hosting to compelling voiceovers, experience
            professionalism that leaves a lasting impression.
          </p>
        </div>

        {/* Image Section */}
        <div className="">
          <img
            src={voiceService}
            alt="kalyeke voiceover picture"
            className="w-full h-full max-w-sm md:max-w-md lg:max-w-lg obect-fit"
          />
        </div>
      </motion.header>

      {/* ✅ Services Section */}
      <motion.section
        className="px-6 md:px-20 py-12 grid gap-10 md:grid-cols-2 bg-dark w-full h-screen"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col items-center aspect-[4/3]  justify-center bg-white rounded-lg shadow-lg p-6 md:p-8 transform transition duration-300 hover:scale-105 text-center">
          <img
            src={hosting}
            alt="Own your mic advert"
            className="rounded-md mb-4 w-full h-full object-cover object-top mx-auto"
          />
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Hosting Services
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-left mx-auto w-fit">
            <li>MCee for Corporate Events, Launches and Gala Nights.</li>
            <li>Moderator for High-Profile Panels and Discussions.</li>
            <li>Podcast Host with engaging storytelling and facilitation.</li>
          </ul>
          <Link
            to="/contact"
            className="inline-block mt-6 bg-gold text-white font-medium py-2 px-4 rounded hover:bg-blackberry transition-all duration-200"
            aria-label="Book Kalekye for your event"
          >
            Book Kalekye for Your Event
          </Link>
        </div>

        {/* Voiceover Services */}
        <div className="flex flex-col items-center justify-center aspect-[4/3] bg-white rounded-lg shadow-lg p-6 md:p-8 transform transition duration-300 hover:scale-105 text-center">
          <img
            src={voiceService}
            alt="Own your mic advert"
            className="rounded-md mb-4 w-full h-full object-top object-cover mx-auto"
          />
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Voiceover Services
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-left mx-auto w-fit">
            <li>
              Professional voiceover for documentaries, commercials, and
              infomercials.
            </li>
            <li>Custom scripts delivered with precision and impact.</li>
          </ul>
          <Link
            to="/contact"
            className="inline-block mt-6 bg-gold text-white font-medium py-2 px-4 rounded hover:bg-blackberry transition-all duration-200"
            aria-label="Request a voiceover"
          >
            Request a Voiceover
          </Link>
        </div>
      </motion.section>

      {/* ✅ Why Choose Us Section */}
      <motion.section
        className="bg-white py-16 px-6 md:px-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-3xl font-bold mb-6">Why Work With Kalekye?</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-8">
          Trusted by organizations and brands, Kalekye brings unmatched
          professionalism, charisma, and a voice that commands attention.
        </p>
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            'Proven track record with global brands',
            'Versatile voice and presence for any project',
            'Commitment to delivering excellence',
          ].map((reason, i) => (
            <motion.div
              key={i}
              className="p-6 bg-cream rounded-xl shadow hover:shadow-md transition"
              variants={fadeUp}
            >
              <p className="text-lg font-medium">{reason}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ✅ Call-to-Action */}
      <motion.section
        className="py-16 bg-gradient-to-r from-gold to-blackberry text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Create Something Unforgettable
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-lg">
          Whether it’s hosting your next big event or voicing your next big
          project, Kalekye brings your vision to life.
        </p>
        <Link
          to="/contact"
          className="bg-white text-blackberry font-semibold py-3 px-8 rounded-xl shadow hover:bg-cream transition"
        >
          Get in Touch
        </Link>
      </motion.section>
    </div>
  );
};

export default ServicesPage;
