import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const OwnYourMic = React.lazy(() => import('./pages/OwnYourMic'));
const Podcast = React.lazy(() => import('./pages/Podcast'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Services = React.lazy(() => import('./pages/Services'));
const Terms = React.lazy(() => import('./pages/TermsAndConditions'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicies'));

function App() {
  return (
    <HelmetProvider>
      {' '}
      <Router>
        <Suspense fallback={<PageLoading />}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ownYourMic" element={<OwnYourMic />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}

// Page-level loading (shown when lazy-loaded pages are loading)
function PageLoading() {
  return <h2>🌀 Loading page...</h2>;
}

export default App;
