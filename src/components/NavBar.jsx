import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Contact from './ContactModal';
import whiteLogo from '../assets/images/icon_white.png';
import blackLogo from '../assets/images/icon_black.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed w-full z-10 transition duration-300 ${
        isScrolled
          ? 'bg-cream shadow-md'
          : 'bg-gradient-to-br from-dark via-gray-800 to-blackberry opacity-80'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="cursor-pointer" onClick={handleLinkClick}>
          <img
            src={isScrolled ? blackLogo : whiteLogo}
            alt="Logo"
            className="h-16"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`cursor-pointer transition font-medium ${
              isScrolled ? 'text-gray-700' : 'text-white'
            } hover:underline decoration-2 hover:text-gold`}
            onClick={handleLinkClick}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`cursor-pointer transition font-medium ${
              isScrolled ? 'text-gray-700' : 'text-white'
            } hover:underline decoration-2 hover:text-gold`}
            onClick={handleLinkClick}
          >
            About
          </Link>

          <Link
            to="/ownYourMic"
            className={`cursor-pointer transition font-medium ${
              isScrolled ? 'text-gray-700' : 'text-white'
            } hover:underline decoration-2 hover:text-gold`}
            onClick={handleLinkClick}
          >
            Own Your Mic
          </Link>

          <Link
            to="/services"
            className={`cursor-pointer transition font-medium ${
              isScrolled ? 'text-gray-700' : 'text-white'
            } hover:underline decoration-2 hover:text-gold`}
            onClick={handleLinkClick}
          >
            Services
          </Link>

          <Link
            to="/podcast"
            className={`cursor-pointer transition font-medium ${
              isScrolled ? 'text-gray-700' : 'text-white'
            } hover:underline decoration-2 hover:text-gold`}
            onClick={handleLinkClick}
          >
            Podcast
          </Link>

          {/* Contact Us Button */}
          <div
            onClick={handleLinkClick}
            className={`border px-6 py-2 rounded-lg transition cursor-pointer font-medium ${
              isScrolled
                ? 'border-gray-700 text-gray-700'
                : 'border-white text-white'
            } hover:border-brown hover:text-black hover:bg-smoke_grey`}
          >
            <Contact />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden text-2xl ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cream shadow-md p-4 space-y-2">
          <Link
            to="/"
            className="block text-gray-700 px-4 py-2 rounded-md hover:bg-purple-100 transition"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 px-4 py-2 rounded-md hover:bg-purple-100 transition"
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            to="/own-your-mic"
            className="block text-gray-700 px-4 py-2 rounded-md hover:bg-purple-100 transition"
            onClick={handleLinkClick}
          >
            Own Your Mic
          </Link>
          <Link
            to="/services"
            className="block text-gray-700 px-4 py-2 rounded-md hover:bg-purple-100 transition"
            onClick={handleLinkClick}
          >
            Services
          </Link>
          <Link
            to="/podcast"
            className="block text-gray-700 px-4 py-2 rounded-md hover:bg-purple-100 transition"
            onClick={handleLinkClick}
          >
            Podcast
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 px-4 py-2 rounded-md hover:bg-purple-100 transition"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
