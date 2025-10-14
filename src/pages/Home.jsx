import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Hero from '../sections/Hero';
import WorkWithUs from '../sections/WorkWithUs.jsx';
import OwnYourMic from '../sections/Programs.jsx';
import TestimonialSlider from '../sections/Testimonial';

// Animation variants for scroll-triggered section reveals
const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth animation
    },
  },
};

/**
 * Home Component - Main landing page
 *
 * Features:
 * - Semantic HTML structure with proper accessibility
 * - Scroll-triggered animations and transitions between sections
 * - Fully responsive design across all device sizes
 * - Optimized performance with proper component structure
 * - SEO-friendly with proper section hierarchy
 */
function Home() {
  // Create refs for each section to track when they come into view
  const programsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const workWithUsRef = useRef(null);

  // Use useInView hook to detect when sections are visible
  const programsInView = useInView(programsRef, {
    once: true,
    margin: '-100px',
  });
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    margin: '-100px',
  });
  const workWithUsInView = useInView(workWithUsRef, {
    once: true,
    margin: '-100px',
  });

  return (
    <main
      className="min-h-screen bg-white overflow-hidden"
      role="main"
      aria-label="Kalekye Mumo Portfolio Homepage"
    >
      {/* Hero Section - Full viewport height with background */}
      <section
        className="relative"
        aria-label="Hero section with main introduction"
      >
        <Hero />
      </section>

      {/* Programs Section - Own Your Mic Programs */}
      <motion.section
        ref={programsRef}
        className="relative bg-gradient-to-b from-gray-50 to-white"
        variants={sectionVariants}
        initial="hidden"
        animate={programsInView ? 'visible' : 'hidden'}
        aria-label="Own Your Mic programs and services"
      >
        <OwnYourMic />
      </motion.section>

      {/* Testimonials Section - Social proof */}
      <motion.section
        ref={testimonialsRef}
        className="relative bg-gradient-to-b from-white to-gray-50"
        variants={sectionVariants}
        initial="hidden"
        animate={testimonialsInView ? 'visible' : 'hidden'}
        aria-label="Client testimonials and reviews"
      >
        <TestimonialSlider />
      </motion.section>

      {/* Call to Action Section - Work with us */}
      <motion.section
        ref={workWithUsRef}
        className="relative bg-gradient-to-b from-gray-50 to-white"
        variants={sectionVariants}
        initial="hidden"
        animate={workWithUsInView ? 'visible' : 'hidden'}
        aria-label="Collaboration opportunities and contact"
      >
        <WorkWithUs />
      </motion.section>
    </main>
  );
}

export default Home;
