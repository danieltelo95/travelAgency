import React from "react"
import logo from '../../assets/images/icons/wilka_logo.png'
import './Footer.css'

const Footer = () => {

    return (
        <div>
            <div className="max-w-2xl mt-16 mx-auto text-letter">
                <div className="text-center mb-16">
                    <h3 className="text-4xl text-fourth font-bold font-title text-secondary"> Contáctanos </h3>
                    <p className="text-2xl text-letter font-body text-secondary"> Tu próxima aventura está a solo un clic </p>
                </div>

                <div className="flex justify-between items-center">
                    <div class="card flex'grow">
                        <div className="background">
                        </div>
                        <div className="social text-md font-body text-letter font-bold">
                            Síguenos
                        </div>

                        <a href="https://www.instagram.com/dtjzz06?igsh=cW4xMmE4aTZ6N3Fv" target="_blank"
                            rel="noopener noreferrer"><div className="box box1"><span className="icon"><svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="svg">
                                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                            </svg></span></div></a>

                        <a href="https://www.facebook.com/daniel.tello.315/" target="_blank"
                            rel="noopener noreferrer"><div className="box box2"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" className="svg">
                                <path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h137.25V327.69h-47.25v-60h47.25v-44.07c0-46.64 28.47-72.11 70.03-72.11 19.86 0 36.94 1.48 41.9 2.14v48.55h-28.73c-22.52 0-26.89 10.7-26.89 26.39v34.78h53.7l-7 60h-46.7V480H400c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48z" />
                            </svg></span></div></a>

                        <a href="https://www.tiktok.com/@vishuddha.studios?_t=8sd5eM9LAkD&_r=1" target="_blank"
                            rel="noopener noreferrer"><div className="box box3"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg">
                                <path d="M448,209.2a210.35,210.35,0,0,1-123.2-39.9v86.7A139.73,139.73,0,1,1,185,125.45a138.08,138.08,0,0,1,31.25,3.65v93.1a56.35,56.35,0,1,0,40,53.8V0H310a121.25,121.25,0,0,0,1.25,17.45,122.12,122.12,0,0,0,38.25,66A123.58,123.58,0,0,0,416,97.55a210.88,210.88,0,0,1,32,2.3Z" />
                            </svg></span></div></a>
                    </div>

                    <div>
                        <img className="imagenlogo h-42"
                            src={logo}
                            alt="Vishuddha Logo"
                        >
                        </img>
                    </div>
                </div>
            </div>
            <div class="pt-4 mt-4 pt-6 text-gray-600  text-center"> © {new Date().getFullYear()}. All rights reserved.</div>
        </div>
    )
}

export default Footer;

