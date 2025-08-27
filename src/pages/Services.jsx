import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // SEO
import { motion } from "framer-motion"; // Animations
import { CheckCircle } from "lucide-react"; // Icons
import hosting from "../assets/images/hosting-services.jpg";
import voiceService from "../assets/images/voiceover-service.jpg";

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

const services = [
  {
    id: 1,
    title: "Hosting Services",
    description:
      "Engage, entertain, and inspire your audience with professional hosting tailored for every occasion.",
    features: [
      "MCee for corporate events, launches, and gala nights.",
      "Moderator for high-profile panels and discussions.",
      "Podcast host with engaging storytelling and facilitation.",
    ],
    image: hosting,
    cta: "Book Kalekye for Your Event",
    link: "/contact",
  },
  {
    id: 2,
    title: "Voiceover Services",
    description:
      "Bring scripts to life with a commanding and versatile voice that resonates across industries.",
    features: [
      "Professional voiceover for documentaries, commercials, and infomercials.",
      "Custom scripts delivered with precision and impact.",
    ],
    image: voiceService,
    cta: "Request a Voiceover",
    link: "/contact",
  },
];

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
        className="text-center py-16 px-6 bg-gradient-to-b from-gold/10 to-transparent"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Elevating Events & Projects with Expertise
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
          From captivating hosting to compelling voiceovers, experience
          professionalism that leaves a lasting impression.
        </p>
      </motion.header>

      {/* ✅ Services Section */}
      <motion.section
        className="px-6 md:px-20 py-12 grid gap-12 md:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service) => (
          <motion.article
            key={service.id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow"
            variants={fadeUp}
          >
            <motion.img
              src={service.image}
              alt={`${service.title} showcase`}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
            />
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <CheckCircle className="w-5 h-5 text-gold mt-1" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={service.link}
                className="inline-block bg-gold text-white font-medium py-3 px-6 rounded-xl shadow hover:bg-blackberry transition-colors"
                aria-label={service.cta}
              >
                {service.cta}
              </Link>
            </div>
          </motion.article>
        ))}
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
            "Proven track record with global brands",
            "Versatile voice and presence for any project",
            "Commitment to delivering excellence",
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
