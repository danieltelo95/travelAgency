import React, { useState } from "react";
import logo from '../../assets/images/icons/wilka_logo.png';


const Header = ({heroRef, aboutRef, benefitsRef, galleryRef, faqRef, workwuRef}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para manejar el desplazamiento
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
      setIsOpen(false); // Cierra el menú en móvil después de hacer clic
    }
  };

  return (
    <header className="sticky top-0 left-0 w-full h-20 bg-transparent z-50 backdrop-blur-md">
  <nav className="flex justify-between items-center h-full px-8">
    {/* Logo */}
    <div className="flex items-center h-full">
      <img
        src={logo}
        alt="logo"
        className="h-24 cursor-pointer max-w-full" // Añadir max-w-full
        onClick={() => scrollToSection(heroRef)}
      />
    </div>

    {/* Botón de menú móvil */}
    <button
      className="md:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
        />
      </svg>
    </button>

    {/* Menú de navegación */}
    <ul
      className={`md:flex md:items-center absolute md:space-x-6 md:static text-letter font-medium text-base w-full md:w-auto transition-transform duration-300 ease-in-out ${
        isOpen ? "top-14 text-right right-0 w-full max-w-full" : "-top-96"
      }`} // Añadir max-w-full en el menú
    >
      <li className="hover:text-secondary font-title text-2xl">
        <button onClick={() => scrollToSection(aboutRef)}>Nosotros</button>
      </li>
      <li className="hover:text-secondary font-title text-2xl">
        <button onClick={() => scrollToSection(benefitsRef)}>Beneficios</button>
      </li>
      {/* <li className="hover:text-secondary font-title text-2xl">
        <button onClick={() => scrollToSection(galleryRef)}>Galería</button>
      </li> */}
      <li className="hover:text-secondary font-title text-2xl">
        <button onClick={() => scrollToSection(faqRef)}>Preguntas</button>
      </li>
      <li className="hover:text-secondary font-title text-2xl">
        <button onClick={() => scrollToSection(workwuRef)}>Trabaja con nosotros</button>
      </li>
    </ul>
  </nav>
</header>
  );
};

export default Header;
