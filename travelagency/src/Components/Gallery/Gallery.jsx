// import React from "react";
// import Slider from 'react-slick'
// import './Gallery.css'

// const Gallery = ({ photoGallery = [] }) => {

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3, // Mostramos 4 cartas a la vez
//         centerMode: false, // Deshabilitamos el centrado (evitar el espacio a los lados)
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1024, // Pantallas grandes
//                 settings: {
//                     slidesToShow: 3,
//                 },
//             },
//             {
//                 breakpoint: 768, // Pantallas medianas (tablets)
//                 settings: {
//                     slidesToShow: 2,
//                 },
//             },
//             {
//                 breakpoint: 480, // Pantallas pequeñas (móviles)
//                 settings: {
//                     slidesToShow: 1,
//                 },
//             },
//         ],
//     };

//     return (
//         <div className="flex flex-col items-center mt-2 mb-16">
//             <Slider {...settings} className="w-full max-w-6xl"> 
//                 {photoGallery.map((photo, index) => (
//                     <div key={index} className="p-4">
//                         <li className="flex-none text-center mx-auto list-none">
//                             <div className="frame">
//                                 <div className="frameline">
//                                     <div className="image">
//                                     <img
//                                         src={photo.image}
//                                         alt={photo.name}
//                                         className="brackets"
//                                     />
//                                     </div>
//                                 </div>
//                             </div>
//                         </li>
//                     </div>
//                 ))
//                 }
//             </Slider >
//         </div >
//     );
// };
// export default Gallery;