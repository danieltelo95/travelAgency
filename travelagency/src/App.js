import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import FloatingBtn from './Components/FloatingBtn/FloatingBtn';
import './index.css';
import HeroSection from './Components/HeroSection/HeroSection';
import About from './Components/AboutUs/AboutUs';
import Benefits from './Components/Benefits/Benefits';
import FAQ from './Components/FAQs/FAQs';
import Divider from './Components/Divider/Divider'; 
import Work from './Components/WorkWithUs/WorkWithUs';
import Photos from './Components/Gallery/Photos';
import Footer from './Components/Footer/Footer';
import { useRef } from 'react';


function App() {


    const heroRef = useRef(null)
    const aboutRef = useRef(null);
    const benefitsRef = useRef(null);
    const galleryRef = useRef(null);
    const faqRef = useRef(null);
    const workwuRef = useRef(null);


  return (
    <BrowserRouter>
      <div id="inicio">
      <Header
          heroRef={heroRef}
          aboutRef={aboutRef}
          benefitsRef={benefitsRef}
          galleryRef={galleryRef}
          faqRef={faqRef}
          workwuRef={workwuRef}
        />
        
          <section ref={heroRef}>
            <HeroSection />
          </section>

          <Divider />

          <section ref={aboutRef}>
            <About />
          </section>

          <section ref={benefitsRef}>
            <Benefits />
          </section>

          {/* <section ref={galleryRef}>
            <Photos />
          </section> */}

          <section ref={faqRef}>
            <FAQ />
          </section>

          <section ref={workwuRef}>
            <Work />
          </section> 
        
        <Footer />
        </div>
        <FloatingBtn />
    </BrowserRouter>
  );
}

export default App;
