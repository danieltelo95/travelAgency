import React, { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border-4 border-transparent border-slate-300">
      <div
        className={`flex justify-between items-center p-4 cursor-pointer rounded-md 
        ${
          isOpen
            ? "bg-[rgba(33,184,239)] bg-opacity-50 text-black" // Estilo cuando está abierto
            : "bg-[rgba(33,184,239)] bg-opacity-25 text-letter" // Estilo predeterminado
        } 
        backdrop-blur-lg backdrop-filter border border-white/20`}
        onClick={toggleOpen}
      >
        <h3 className="text-sm font-button font-semibold">{question}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div className="p-4 text-letter font-body">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
