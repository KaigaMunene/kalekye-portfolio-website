import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { testimonials } from '../assets/data/testimonialData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Arrow Components with Proper Styling
const PrevArrow = ({ className, onClick }) => {
  return (
    <button
      className={`${className} slick-prev absolute left-0 md:left-[-30px] bg-black text-black text-2xl p-3 rounded-full shadow-md hover:opacity-80 transition`}
      onClick={onClick}
    >
      &#9665;
    </button>
  );
};

const NextArrow = ({ className, onClick }) => {
  return (
    <button
      className={`${className} slick-next absolute right-0 md:right-[-30px] bg-black text-black text-2xl p-3 rounded-full shadow-md hover:opacity-80 transition`}
      onClick={onClick}
    >
      &#9655;
    </button>
  );
};

// PropTypes Validation for Custom Arrows
PrevArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

NextArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

// Animation variants for Testimonial component
const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
    },
  },
};

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true, // Enable arrows
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="pt-4 pb-12 w-full h-auto font-fraunces overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <motion.h2
          className="text-4xl font-bold mb-4 text-dark"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          Testimonials
        </motion.h2>
        <motion.h4
          className="mb-4 font-medium text-lg"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          What people are saying about our programs
        </motion.h4>
        <motion.div variants={cardVariants} initial="hidden" animate="visible">
          <Slider {...settings}>
            {testimonials.map((member, index) => (
              <div key={index} className="px-4">
                <motion.div
                  className="bg-cream shadow-xl rounded-xl p-6 flex flex-col items-center text-center min-h-[350px] md:min-h-[400px] lg:min-h-[450px]"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h1 className="text-lg font-semibold mb-4 text-gold">
                    {member.program}
                  </h1>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-contain mb-4"
                  />
                  <p className="text-base italic text-gray-700 flex-1">{`"${member.description}"`}</p>
                  <div className="mt-4">
                    <p className="font-bold text-gray-900">{member.name}</p>
                    <p className="text-gray-500 text-sm">{member.role}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
