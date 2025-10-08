import Hero from '../sections/Hero';
import WorkWithUs from '../sections/WorkWithUs';
import OwnYourMic from '../sections/Programs.jsx';
import TestimonialSlider from '../sections/Testimonial';

function Home() {
  return (
    <section>
      <div>
        <Hero />
        <OwnYourMic />
        <TestimonialSlider />
        <WorkWithUs />
      </div>
    </section>
  );
}

export default Home;
