import hero from "../assets/images/hero.png";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen flex items-end font-forum bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Wrapper to center horizontally */}
      <div className="relative w-full flex justify-center pb-12 px-6">
        <div className="max-w-4xl text-center">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Unleash the Power of Your Voice <br />
            <span className="text-lg sm:text-xl md:text-2xl font-fraunces font-light">
              with Kalekye Mumo
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-sm sm:text-base md:text-lg font-light text-white">
            Award-Winning Podcaster | Renowned Host | Voiceover Artist <br />
            Creator of Own Your Mic Program
          </h2>

          {/* Tagline */}
          <p className="mt-4 text-sm sm:text-base md:text-lg italic font-light text-gray-300">
            Empowering Voices, Transforming Lives
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
