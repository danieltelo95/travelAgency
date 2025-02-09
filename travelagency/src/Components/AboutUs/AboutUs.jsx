import React, { useEffect, useState, useRef } from "react";
import destino1 from '../../assets/images/photos/destino_1.jpg'
import destino2 from '../../assets/images/photos/destino_2.jpg'
import destino3 from '../../assets/images/photos/destino_3.jpg'
import destino4 from '../../assets/images/photos/destino_4.jpg'
import destino5 from '../../assets/images/photos/destino_5.jpg'
import destino6 from '../../assets/images/photos/destino_6.jpg'
import './About.css'

const About = () => {

    const [currentItem, setCurrentItem] = useState(0);
    const sectionRef = useRef(null);

    const images = [
        { image: destino1, name: 4 },
        { image: destino2, name: 5 },
        { image: destino3, name: 6 },
        { image: destino4, name: 7 },
        { image: destino5, name: 8 },
        { image: destino6, name: 9 }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentItem((prevItem) => (prevItem + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("transition-in-side");
                    } else {
                        entry.target.classList.remove("transition-in-side");
                    }
                });
            },
            { threshold: 0.5 }
        );

        const currentSection = sectionRef.current;

        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);


    return (
        <div className="overflow-x-hidden">
            <div className="flex items-center gap-4 justify-center">
                <h2
                    className="font-title text-center text-5xl font-bold tracking-widest text-secondary"
                > NOSOTROS </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-16 sm:p-8 md:p-10 lg:p-12 xl:p-10 px-8 sm:px-6 md:px-10 lg:px-12 xl:px-10 relative">
                <p
                    className="font-body text-justify text-letter flex-1 mt-4 sm:text-center md:text-left"
                    // ref={sectionRef}
                    // transition-style="in:side:bottom-right"
                >
                    En Wilka Agency, nos especializamos en ofrecer experiencias
                    únicas e inolvidables. Nuestro objetivo es ayudarte a explorar destinos
                    exóticos, relajantes y emocionantes, todo adaptado a tus intereses y
                    preferencias. Contamos con un equipo de expertos en viajes que está
                    comprometido en brindarte el mejor servicio, ofreciendo asesoría personalizada
                    en cada etapa de tu aventura. Ya sea que desees conocer las playas paradisíacas
                    del Caribe, realizar un tour cultural por Europa o vivir una experiencia de
                    ecoturismo en la selva amazónica, en Viajes Destino Perfecto, hacemos realidad
                    tus sueños viajeros. Con nuestras opciones de paquetes turísticos, traslados,
                    y actividades locales, garantizamos una experiencia completa y sin preocupaciones.
                </p>
                <div className="relative flex flex-1 justify-center items-center mt-4 sm:mt-8">
                    <img
                        src={images[currentItem].image}
                        alt={`Imagen ${images[currentItem].name}`}
                        className="roman w-full h-auto max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
