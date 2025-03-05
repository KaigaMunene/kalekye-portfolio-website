import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
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
const Terms = React.lazy(() => import('./pages/Terms'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicies'));

function App() {
  return (
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
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

// Page-level loading (shown when lazy-loaded pages are loading)
function PageLoading() {
  return <h2>🌀 Loading page...</h2>;
}

export default App;
