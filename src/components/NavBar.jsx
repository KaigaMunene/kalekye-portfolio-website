import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import whiteLogo from '../assets/images/icon_white.png';
import blackLogo from '../assets/images/icon_black.png';
import Contact from './ContactModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navbarHeight = 60;
  const sections = [
    'home',
    'about',
    'own-your-mic',
    'podcast',
    'contact',
  ];

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
        isScrolled ? 'bg-cream shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center h-20">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer"
          onClick={handleLinkClick}
        >
          <img
            src={isScrolled ? blackLogo : whiteLogo}
            alt="Logo"
            className="h-16"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {sections.slice(0, -1).map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              className={`cursor-pointer transition font-medium ${
                isScrolled ? 'text-gray-700' : 'text-white'
              } hover:underline decoration-2 hover:text-gold`}
              onClick={handleLinkClick}
            >
              {section
                .replace(/-/g, ' ')
                .replace(/\b\w/g, (c) => c.toUpperCase())}
            </Link>
          ))}

          {/* Contact Us Button */}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-navbarHeight}
            className={`border px-6 py-2 rounded-lg transition cursor-pointer font-medium ${
              isScrolled
                ? 'border-gray-700 text-gray-700'
                : 'border-white text-white'
            } hover:border-brown hover:text-black hover:bg-smoke_grey`}
            onClick={handleLinkClick}
          >
            <Contact />
          </Link>
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
        <div className="md:hidden bg-white shadow-md p-4 space-y-2">
          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              className="block text-gray-700 px-4 py-2 rounded-md hover:bg-purple-100 transition"
              onClick={handleLinkClick}
            >
              {section
                .replace(/-/g, ' ')
                .replace(/\b\w/g, (c) => c.toUpperCase())}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
