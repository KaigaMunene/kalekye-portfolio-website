import { Helmet } from 'react-helmet-async';
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

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About - Kalekye Mumo</title>
        <meta
          name="description"
          content="Meet Kalekye Mumo, a media personality, mentor, and voiceover artist transforming lives through her voice and expertise."
        />
        <meta
          name="keywords"
          content="Kalekye Mumo, Voiceover, Podcasting, Event Hosting, KM Network"
        />
      </Helmet>

      <section className="min-h-screen bg-gray-100 text-gray-800 pt-20">
        <header className="bg-gold text-white py-12 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">
              A Voice That Inspires, A Mentor That Transforms
            </h1>
            <p className="text-lg font-light">
              Empowering Voices, Creating Impact
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          {/* Meet Kalekye Section */}
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Meet Kalekye Mumo</h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              With over 15 years in Kenyan mainstream media, I’ve earned the
              title Queen of Media for my ability to captivate audiences through
              dynamic communication. As a celebrated event host, panel
              moderator, and voiceover artist, I bring professionalism and
              charisma to every stage and microphone. My voice has inspired
              laughter, sparked change, and created unforgettable
              moments—whether on radio, TV, or live events.
            </p>
          </section>

          {/* Empowering Through KM Network */}
          <section className="flex flex-col lg:flex-row items-center gap-6 mb-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">
                Empowering Through KM Network
              </h3>
              <p className="text-lg leading-relaxed">
                Through my consultancy, KM Network, I designed the Own Your Mic
                programs to train future hosts, voiceover artists, and public
                speakers to excel and transform their speaking opportunities
                into memorable experiences.
              </p>
            </div>
            <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
              <Carousel images={empowerImages} />
            </div>
          </section>

          {/* Conversations with Kalekye */}
          <section className="flex flex-col lg:flex-row items-center gap-6 mb-12">
            <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
              <Carousel images={talkImages} />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">
                Conversations with Kalekye
              </h3>
              <p className="text-lg leading-relaxed">
                As the creator of <em>Conversations with Kalekye</em>, Africa’s
                Best Relationship Podcast of 2024, I explore authentic
                discussions on love and accountability, amplifying stories that
                connect and inspire.
              </p>
            </div>
          </section>

          {/* Voiceover Excellence */}
          <section className="flex flex-col lg:flex-row items-center gap-6 mb-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">Voiceover Excellence</h3>
              <p className="text-lg leading-relaxed">
                My voiceover work has brought life to documentaries,
                commercials, and infomercials, delivering powerful messaging for
                local and international brands.
              </p>
            </div>
            <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
              <Carousel images={voiceImages} />
            </div>
          </section>
        </main>
      </section>
    </>
  );
};

export default AboutPage;
