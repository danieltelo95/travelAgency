import React, { useEffect, useRef } from "react";
import ambiente from '../../assets/images/icons/ambiente.png'
import convenios from '../../assets/images/icons/convenios.png'
import finanzas from '../../assets/images/icons/finanzas.png'
import formacion from '../../assets/images/icons/formacion.png'
import monitoreo from '../../assets/images/icons/monitoreo.png'
import psicologia from '../../assets/images/icons/psicologia.png'
import './Benefits.css'

const Benefits = () => {

    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-square");
                    } else {
                        entry.target.classList.remove("animate-square");
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
        <div
            className="mb-8" >
            <div
                className="flex items-center justify-center px-4"
            >
                <h2 className="font-title text-center font-bold tracking-widest text-letter text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                    ref={sectionRef}
                    transition-style="in:square:bottom-right"
                >
                    Ventajas <br />
                    <span className="font-light lg:text-xl md:text-m sm:text-sm tracking-wider">de viajar con</span>
                    <span className="font-vishuddhaFont font-light font-button text-secondary text-6xl sm:text-7xl md:text-8xl lg:text-9xl relative top-6 md:top-10">
                    Wilka Agency <br />
                    </span>
                </h2>
            </div>
            <div className="flex justify-center mt-8" >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
            <div className="benefitCard w-full p-4 sm:p-6">
                        <div className="flex items-center mb-4 justify-center gap-4">
                            <h3 className="font-bold text-m text-letter tracking-wider mb-4 text-center">Apoyo financiero</h3>
                            <img src={finanzas} alt="finanzas" className="w-8 h-8 mr-4"></img>
                        </div>
                        <p className="text-letter font-body font-light text-md text-justify">
                            Ofrecemos opciones de financiamiento para que puedas disfrutar de tus viajes sin preocupaciones.
                        </p>
                    </div>
                    <div className="benefitCard">
                        <div className="flex items-center mb-4 justify-center gap-4">
                            <h3 className="font-bold text-m text-letter tracking-wider mb-4 text-center">Monitoreo personalizado</h3>
                            <img src={monitoreo} alt="monitoreo" className="w-8 h-8 mr-4"></img>
                        </div>
                        <p className="text-letter font-body font-light text-md text-justify">
                            Nuestro equipo está disponible para brindarte asistencia y guiarte en cada etapa de tu viaje.
                        </p>
                    </div>
                    <div className="benefitCard">
                        <div className="flex items-center mb-4 justify-center gap-4">
                            <h3 className="font-bold text-m text-letter tracking-wider mb-4 text-center">Convenios exclusivos</h3>
                            <img src={convenios} alt="convenios" className="w-8 h-8 mr-4"></img>
                        </div>
                        <p className="text-letter font-body font-light text-md text-justify">
                            Disfruta de descuentos y beneficios especiales con nuestros socios para hacer tu viaje más accesible.
                        </p>
                    </div>
                    <div className="benefitCard">
                        <div className="flex items-center mb-4 justify-center gap-4">
                            <h3 className="font-bold text-m text-letter tracking-wider mb-4 text-center">Formación continua</h3>
                            <img src={formacion} alt="formacion" className="w-8 h-8 mr-4"></img>
                        </div>
                        <p className="text-letter font-body font-light text-md text-justify">
                            Ofrecemos talleres y capacitaciones para enriquecer tu experiencia de viaje y prepararte para nuevas aventuras.
                        </p>
                    </div>
                    <div className="benefitCard">
                        <div className="flex items-center mb-4 justify-center gap-4">
                            <h3 className="font-bold text-m text-letter tracking-wider mb-4 text-center">Ambiente exclusivo</h3>
                            <img src={ambiente} alt="ambiente" className="w-8 h-8 mr-4"></img>
                        </div>
                        <p className="text-letter font-body font-light text-md text-justify">
                            Conoce a otros viajeros en un ambiente único, donde se promueve el intercambio cultural y el respeto mutuo.
                        </p>
                    </div>
                    <div className="benefitCard">
                        <div className="flex items-center mb-4 justify-center gap-4">
                            <h3 className="font-bold text-m text-letter tracking-wider mb-4 text-center">Soporte durante el viaje</h3>
                            <img src={psicologia} alt="soporte" className="w-8 h-8 mr-4"></img>
                        </div>
                        <p className="text-letter font-body font-light text-md text-justify">
                            Recibe apoyo y orientación en todo momento, asegurando una experiencia de viaje inolvidable y sin contratiempos.
                        </p>
                    </div>
                </div>
            </div>
            <hr class="w-96 h-1 mx-auto my-4 border-0 rounded md:my-10 dark:bg-primary" />
        </div>
    );

}

export default Benefits;
