import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import WhyNaipunya from './components/WhyNaipunya/WhyNaipunya';
import Capabilities from './components/Capabilities/Capabilities';
import Features from './components/Features/Features';
import AIEngineer from './components/AIEngineer/AIEngineer';
import ChatCarousel from './components/ChatCarousel/ChatCarousel';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import About from './components/About/About'; // Import your About component

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <Routes>
          {/* Full layout with sections */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <WhyNaipunya />
                <Capabilities />
                <Features />
                <AIEngineer />
                <ChatCarousel />
                <Products />
                <Footer />
              </>
            }
          />

          {/* About page takes the full screen */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
