import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MdOutlineKeyboardArrowRight,
  MdStar,
  MdMic,
  MdRecordVoiceOver,
  MdEvent,
} from 'react-icons/md';
import Carousel from '../components/Carousel';
import one from '../assets/images/podcast-1.png';
import two from '../assets/images/apva-award.png';
import three from '../assets/images/bts-onset.png';
import empowerOne from '../assets/images/empower-1.png';
import empowerTwo from '../assets/images/empower-2.png';
import empowerThree from '../assets/images/empower-3.png';
import VoiceoverOne from '../assets/images/Grid-1.png';
import voiceoverTwo from '../assets/images/Grid-2.png';
import voiceoverThree from '../assets/images/Grid-3.png';

const voiceImages = [
  { src: VoiceoverOne, alt: 'Event hosting' },
  { src: voiceoverTwo, alt: 'Podcasting' },
  { src: voiceoverThree, alt: 'Voiceover recording' },
];

const talkImages = [
  { src: one, alt: 'Event hosting' },
  { src: two, alt: 'Podcasting' },
  { src: three, alt: 'Voiceover recording' },
];

const empowerImages = [
  { src: empowerTwo, alt: 'Podcasting' },
  { src: empowerOne, alt: 'Event hosting' },
  { src: empowerThree, alt: 'Voiceover recording' },
];

// Animation variants
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const AboutPage = () => {
  return (
    <div className="bg-cream min-h-screen font-forum text-gray-800">
      <Helmet>
        <title>About Kalekye Mumo | Queen of Media & Voice Expert</title>
        <meta
          name="description"
          content="Meet Kalekye Mumo, Kenya's Queen of Media with 15+ years experience. Award-winning podcast host, voiceover artist, and mentor transforming lives through communication excellence."
        />
        <meta
          name="keywords"
          content="Kalekye Mumo, Queen of Media, Voiceover Artist, Podcast Host, Event Host, KM Network, Own Your Mic"
        />
      </Helmet>

      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen bg-gradient-to-br from-dark via-gray-800 to-blackberry text-white flex items-center justify-center overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-gold/50 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 max-w-6xl mx-auto">
          <motion.div
            className="mb-8"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/20 rounded-full mb-6">
              <MdStar className="w-10 h-10 text-gold" />
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gold to-white bg-clip-text text-transparent"
            variants={fadeUp}
          >
            A Voice That Inspires,
            <br />
            <span className="text-gold">A Mentor That Transforms</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-light text-gray-300 mb-8 max-w-4xl mx-auto"
            variants={fadeUp}
          >
            Empowering Voices, Creating Impact, Transforming Lives
          </motion.p>
        </div>
      </motion.section>

      {/* Meet Kalekye Section */}
      <motion.section
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            className="mb-12"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Meet Kalekye Mumo
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-2xl p-8 sm:p-12 lg:p-16 shadow-lg"
            variants={fadeUp}
          >
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto">
              With over <span className="font-bold text-gold">15 years</span> in
              Kenyan mainstream media, I&apos;ve earned the title{' '}
              <span className="font-bold text-gold">Queen of Media</span> for my
              ability to captivate audiences through dynamic communication. As a
              celebrated event host, panel moderator, and voiceover artist, I
              bring professionalism and charisma to every stage and microphone.
              My voice has inspired laughter, sparked change, and created
              unforgettable moments—whether on radio, TV, or live events.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Expertise Cards */}
      <motion.section
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-gray-50"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-12" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Areas of Excellence
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              variants={scaleIn}
            >
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MdMic className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Event Hosting
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Professional MC and moderator for corporate events, launches,
                and high-profile panels with unmatched charisma.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              variants={scaleIn}
            >
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MdRecordVoiceOver className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Voiceover Artistry
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Award-winning voiceover work for documentaries, commercials, and
                infomercials that captivate audiences.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              variants={scaleIn}
            >
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MdEvent className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Podcast Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Creator of Africa&apos;s Best Relationship Podcast 2024,
                exploring authentic discussions on love and accountability.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* KM Network Section */}
      <motion.section
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                Empowering Through <span className="text-gold">KM Network</span>
              </h3>
              <div className="w-20 h-1 bg-gold mb-6"></div>
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                Through my consultancy, KM Network, I designed the{' '}
                <span className="font-semibold text-gold">Own Your Mic</span>
                programs to train future hosts, voiceover artists, and public
                speakers to excel and transform their speaking opportunities
                into memorable experiences.
              </p>
              <Link
                to="/own-your-mic"
                className="inline-flex items-center gap-2 bg-gold text-dark font-semibold py-3 px-6 rounded-lg hover:bg-gold/90 transition-all duration-300"
              >
                Explore Programs <MdOutlineKeyboardArrowRight />
              </Link>
            </motion.div>
            <motion.div
              className="rounded-2xl overflow-hidden shadow-2xl"
              variants={scaleIn}
            >
              <Carousel images={empowerImages} />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Conversations with Kalekye */}
      <motion.section
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-2xl"
              variants={scaleIn}
            >
              <Carousel images={talkImages} />
            </motion.div>
            <motion.div className="order-1 lg:order-2" variants={fadeUp}>
              <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                <span className="text-gold">Conversations</span> with Kalekye
              </h3>
              <div className="w-20 h-1 bg-gold mb-6"></div>
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                As the creator of{' '}
                <em className="font-semibold text-gold">
                  Conversations with Kalekye
                </em>
                , Africa&apos;s{' '}
                <span className="font-bold text-gold">
                  Best Relationship Podcast of 2024
                </span>
                , I explore authentic discussions on love and accountability,
                amplifying stories that connect and inspire.
              </p>
              <div className="bg-gold/10 rounded-lg p-6">
                <p className="text-sm font-semibold text-gold mb-2">
                  🏆 AWARD WINNER
                </p>
                <p className="text-gray-700">
                  Africa&apos;s Best Relationship Podcast 2024
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Voiceover Excellence */}
      <motion.section
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                <span className="text-gold">Voiceover</span> Excellence
              </h3>
              <div className="w-20 h-1 bg-gold mb-6"></div>
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                My voiceover work has brought life to documentaries,
                commercials, and infomercials, delivering powerful messaging for
                local and international brands with precision and impact.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-gold text-dark font-semibold py-3 px-6 rounded-lg hover:bg-gold/90 transition-all duration-300"
              >
                Book Voiceover <MdOutlineKeyboardArrowRight />
              </Link>
            </motion.div>
            <motion.div
              className="rounded-2xl overflow-hidden shadow-2xl"
              variants={scaleIn}
            >
              <Carousel images={voiceImages} />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-gradient-to-br from-dark via-gray-800 to-blackberry text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold to-white bg-clip-text text-transparent">
              Ready to Transform Your Voice?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s work together to elevate your communication skills and
              create unforgettable experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gold text-dark font-semibold py-3 px-8 rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Started Today <MdOutlineKeyboardArrowRight />
                </span>
              </Link>
              <Link
                to="/services"
                className="border-2 border-gold text-gold font-semibold py-3 px-8 rounded-lg hover:bg-gold hover:text-dark transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
