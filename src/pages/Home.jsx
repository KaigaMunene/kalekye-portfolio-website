import Hero from '../sections/Hero';
import About from '../sections/About.jsx';
import WorkWithUs from '../sections/WorkWithUs';
import OwnYourMic from '../sections/Programs.jsx';
import WhatIOffer from '../sections/WhatIOffer';
import Conversations from '../sections/Conversations';
import TestimonialSlider from '../sections/Testimonial';

function Home() {
  return (
    <section>
      <div>
        <Hero />
        <About />
        <OwnYourMic />
        <WorkWithUs />
        <WhatIOffer />
        <Conversations />
        <TestimonialSlider />
      </div>
    </section>
  );
}

export default Home;
