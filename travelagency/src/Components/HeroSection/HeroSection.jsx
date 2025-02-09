import React from 'react';
import heroImage from '../../assets/images/hero_image.jpg';
import './HeroSection.css'; // Asegúrate de tener este archivo de estilos.

const HeroSection = () => {
  return (
    <section
      className="hero-section relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay absolute inset-0 bg-black opacity-50"></div>
      <div className="hero-content text-center relative z-10 px-4">
        <h1 className="hero-title text-white font-vishuddhaFont text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Explora el Mundo con Wilka Agency
        </h1>
        <p className="hero-text text-white font-body text-lg sm:text-xl md:text-2xl font-light mb-6">
          Descubre destinos increíbles, vive experiencias únicas y viaja con el respaldo de expertos.
        </p>
        <a
          href="https://wa.link/qwlrxc"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn bg-primary text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-secondary transition-colors"
        >
          ¡Comienza tu Aventura!
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
