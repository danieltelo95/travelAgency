import React from "react";
import trabajador1 from '../../assets/images/photos/trabajador1.jpg'
import trabajador2 from '../../assets/images/photos/trabajador2.jpg'

import './Work.css'

const Work = () => {

    return (
        <div>
            <h2 className="font-title text-center text-5xl font-bold tracking-wide text-secondary">Conoce a Nuestro Equipo</h2>
            <div className="max-w-screen-lg mx-auto px-4 mt-16">
                <p className="flex justify-center font-body text-letter text-lg mt-16 text-center">
                    En Wilka Agency, buscamos personas apasionadas por el mundo de los viajes y el turismo que deseen unirse a nuestro equipo.
                    Ofrecemos un ambiente dinámico y profesional, donde tendrás la oportunidad de crecer y desarrollar tu carrera,
                    mientras trabajas en proyectos emocionantes y colaboras con un equipo comprometido.
                    Si te apasiona ayudar a las personas a descubrir nuevos destinos y vivir experiencias inolvidables, ¡te estamos esperando!
                </p>

            </div>
            <div className="flex justify-center mt-16">
                <figure className="wave">
                    <img src={trabajador2} alt="daniel"></img>
                    <figcaption className="text-letter font-script">Alberto T.</figcaption>
                </figure>

                <figure className="wave">
                    <img src={trabajador1} alt="sharick"></img>
                    <figcaption className="text-letter font-script">Sofía G.</figcaption>
                </figure>

            </div>

            <div className="flex justify-center mt-16">
                <div className="text-center">
                    <h2 className="text-md font-body text-letter font-bold">CONTACTANOS PARA LLEVAR TUS VACACIONES AL SIGUIENTE NIVEL</h2>
                    <button className="logo mt-8">
                        <a
                            href="https://wa.link/qwlrxc"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="bloom-container">
                                <div className="logo-container-main">
                                    <div className="logo-inner">
                                        <div className="back"></div>
                                        <div className="front">
                                            <svg viewBox="0 0 16 16" className="svg">
                                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="logo-glass">
                                        <div className="back"></div>
                                        <div className="front"></div>
                                    </div>
                                </div>
                                <div className="bloom bloom1"></div>
                                <div className="bloom bloom2"></div>
                            </div>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )

}

export default Work;
