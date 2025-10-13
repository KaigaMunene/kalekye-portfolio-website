import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Play, Headphones, Award, Users, Clock, Star } from 'lucide-react';
import Podcast from '../assets/images/podcast-1.jpeg';

// Animation variants for scroll-triggered animations
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const PodcastPage = () => {
  // Refs for scroll animations
  const heroRef = useRef(null);
  const episodesRef = useRef(null);

  // Use useInView hook to detect when sections are visible
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const episodesInView = useInView(episodesRef, {
    once: true,
    margin: '-100px',
  });

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-br from-cream via-white to-gray-50">
        {/* SEO Meta Tags */}
        <Helmet>
          <title>Podcast with Kalekye Mumo | Award-Winning Conversations</title>
          <meta
            name="description"
            content="Join Kalekye Mumo's award-winning podcast for deep, meaningful discussions about relationships, life, and career. Available on Spotify and YouTube."
          />
          <meta
            name="keywords"
            content="Kalekye Mumo, podcast, award-winning, conversations, relationships, life, career, Spotify, YouTube"
          />
          <meta name="author" content="Kalekye Mumo" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Helmet>

        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-24 md:pt-28 pb-16 gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
        >
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left max-w-2xl"
            variants={itemVariants}
          >
            {/* Award Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Award className="w-4 h-4" />
              Winner of the 2024 Podcast Excellence Award
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight"
              variants={itemVariants}
            >
              Discover Conversations that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-brown">
                Matter
              </span>{' '}
              with <span className="text-gold">Kalekye Mumo</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8"
              variants={itemVariants}
            >
              A space for deep, meaningful discussions about relationships,
              life, and career. Join thousands of listeners for transformative
              conversations.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="w-5 h-5 text-gold" />
                <span className="font-semibold">10K+</span>
                <span className="text-sm">Listeners</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Star className="w-5 h-5 text-gold" />
                <span className="font-semibold">4.9</span>
                <span className="text-sm">Rating</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="w-5 h-5 text-gold" />
                <span className="font-semibold">50+</span>
                <span className="text-sm">Episodes</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              variants={buttonVariants}
            >
              <motion.a
                href="https://www.youtube.com/playlist?list=PLpTdl0lbxSrZDEd17de6gWC3algkWcgkp"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Watch and Subscribe on YouTube"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch & Subscribe
              </motion.a>

              <motion.a
                href="https://open.spotify.com/show/4oWZvTW6T3hOISr0mMlGEu?si=dacf9828831743dd"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Listen on Spotify"
              >
                <Headphones className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Listen on Spotify
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-brown/20 rounded-2xl blur-xl transform rotate-3"></div>
              <img
                src={Podcast}
                alt="Kalekye Mumo hosting her award-winning podcast"
                className="relative w-full h-auto max-w-sm lg:max-w-lg rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Episodes Section */}
        <motion.section
          ref={episodesRef}
          className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-white via-gray-50 to-cream"
          variants={containerVariants}
          initial="hidden"
          animate={episodesInView ? 'visible' : 'hidden'}
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-dark mb-6"
                variants={itemVariants}
              >
                Latest{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-brown">
                  Episodes
                </span>
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                variants={itemVariants}
              >
                Dive into our most recent conversations and discover insights
                that can transform your perspective on life, relationships, and
                career growth.
              </motion.p>
            </motion.div>

            {/* Platform Cards */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* YouTube Card */}
              <motion.div
                className="group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-red-600 to-red-700 p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          YouTube Channel
                        </h3>
                        <p className="text-red-100">Watch & Subscribe</p>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/videoseries?si=Q8LZsUe-7mUEAXXD&amp;list=PLpTdl0lbxSrZDEd17de6gWC3algkWcgkp"
                        title="YouTube Playlist - Kalekye Mumo Podcast"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">10K+ Subscribers</span>
                      </div>
                      <a
                        href="https://www.youtube.com/playlist?list=PLpTdl0lbxSrZDEd17de6gWC3algkWcgkp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-700 font-semibold text-sm transition-colors"
                      >
                        View All Episodes →
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Spotify Card */}
              <motion.div
                className="group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-green-600 to-green-700 p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Headphones className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          Spotify Podcast
                        </h3>
                        <p className="text-green-100">Listen & Follow</p>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-900">
                      <iframe
                        className="w-full h-full"
                        src="https://open.spotify.com/embed/show/4oWZvTW6T3hOISr0mMlGEu?utm_source=generator&theme=0"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        title="Spotify Podcast - Kalekye Mumo"
                      />
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm">4.9 Rating</span>
                      </div>
                      <a
                        href="https://open.spotify.com/show/4oWZvTW6T3hOISr0mMlGEu?si=dacf9828831743dd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 font-semibold text-sm transition-colors"
                      >
                        Follow on Spotify →
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div className="text-center mt-16" variants={itemVariants}>
              <motion.div
                className="bg-gradient-to-r from-gold/10 to-brown/10 rounded-2xl p-8 border border-gold/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">
                  Ready to Join the Conversation?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Subscribe to never miss an episode and be part of our growing
                  community of listeners seeking meaningful conversations.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <motion.a
                    href="https://www.youtube.com/playlist?list=PLpTdl0lbxSrZDEd17de6gWC3algkWcgkp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-red-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-red-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-4 h-4" />
                    Subscribe on YouTube
                  </motion.a>
                  <motion.a
                    href="https://open.spotify.com/show/4oWZvTW6T3hOISr0mMlGEu?si=dacf9828831743dd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Headphones className="w-4 h-4" />
                    Follow on Spotify
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </HelmetProvider>
  );
};

export default PodcastPage;
