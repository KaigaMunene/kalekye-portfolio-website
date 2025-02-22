import { Link } from 'react-router-dom';
import logo from '../assets/images/icon_white.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-6 font-forum">
      <div className="container mx-auto px-4">
        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row justify-between md:justify-around gap-4 text-lg mb-4">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#ownYourMic" className="hover:underline">
            Own Your Mic
          </a>
          <a href="#podcast" className="hover:underline">
            Podcast
          </a>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          {/* Legal Links */}
          <Link to="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
          <Link to="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
        </nav>

        <hr className="border-gray-700" />

        {/* Footer Bottom Section */}
        <div className="flex flex-wrap justify-around items-center mt-4 gap-4">
          <div className="text-smoke_grey text-center md:text-left">
            <p>&copy; 2025 Kalekye Mumo. All rights reserved.</p>
          </div>
          <div className="footer__logo text-center md:text-right">
            <img
              src={logo}
              alt="Kalekye Mumo logo"
              className="w-10 h-10 object-contain mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
