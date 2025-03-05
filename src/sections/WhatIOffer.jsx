import { Link } from 'react-router-dom';
import hosting from '../assets/images/hosting-services.jpg';
import voiceService from '../assets/images/voiceover-service.jpg';

const WhatIOffer = () => {
  return (
    <div className="bg-cream min-h-screen py-10 px-5 md:px-20 font-forum">
      {/* Headline Section */}
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Bringing Expertise to Every Stage and Microphone
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          Discover the professional hosting and voiceover services tailored to
          elevate your events and projects.
        </p>
      </header>

      {/* Services Section */}
      <section className="grid gap-10 md:grid-cols-2">
        {/* Hosting Services */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 transform transition duration-300 hover:scale-105 text-center">
          <img
            src={hosting}
            alt="Own your mic advert"
            className="rounded-md mb-4 w-full h-48 object-contain mx-auto"
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
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 transform transition duration-300 hover:scale-105 text-center">
          <img
            src={voiceService}
            alt="Own your mic advert"
            className="rounded-md mb-4 w-full h-48 object-contain mx-auto"
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
      </section>
    </div>
  );
};

export default WhatIOffer;
