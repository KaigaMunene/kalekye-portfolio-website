import Hero from '../sections/Hero';
import About from '../sections/About';
import WorkWithUs from './WorkWithUs';
import OwnYourMic from './OwnYourMic';
import WhatIOffer from './WhatIOffer';
import Conversations from './Conversations';
import TestimonialSlider from './Testimonial';

function Home() {
  return (
    <section id="home">
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
