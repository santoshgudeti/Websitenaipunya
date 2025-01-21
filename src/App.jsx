import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import WhyAbacus from './components/WhyAbacus/WhyAbacus';
import Capabilities from './components/Capabilities/Capabilities';
import Products from './components/Products/Products';
import AIEngineer from './components/AIEngineer/AIEngineer';
import ChatCarousel from './components/ChatCarousel/ChatCarousel';
import Featured from './components/Featured/Featured';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    
      <div className="app-container">
        <Navbar />
        <Hero />
        <WhyAbacus />
        <Capabilities />
        <Products />
        <AIEngineer />
        <ChatCarousel />
        <Featured />
        <Footer />
      </div>
  
  );
}

export default App;