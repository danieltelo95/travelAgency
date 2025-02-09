import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {

  const faqs = [
    {
      question: '¿Qué tipo de viajes organizan?',
      answer: 'Organizamos una amplia variedad de viajes, desde escapadas de fin de semana hasta aventuras internacionales. Ofrecemos paquetes personalizados que se ajustan a tus gustos y necesidades.'
    },
    {
      question: '¿Puedo personalizar mi paquete de viaje?',
      answer: 'Sí, trabajamos contigo para crear el viaje ideal. Puedes elegir el destino, actividades y duración para que se ajuste perfectamente a tus intereses.'
    },
    {
      question: '¿Cómo puedo hacer una reserva?',
      answer: 'Puedes hacer una reserva directamente en nuestra página web o contactarnos para asistencia personalizada. Nuestro equipo te guiará en todo el proceso.'
    },
    {
      question: '¿Es necesario pagar todo el paquete por adelantado?',
      answer: 'No es necesario pagar el total por adelantado. Ofrecemos planes de pago flexibles, con una parte inicial y el resto antes de la fecha de salida.'
    },
    {
      question: '¿Qué pasa si tengo que cancelar mi viaje?',
      answer: 'Entendemos que pueden surgir imprevistos. Ofrecemos opciones de reembolso o cambios en la fecha del viaje dependiendo de las políticas del paquete seleccionado.'
    },
    {
      question: '¿Ofrecen asesoramiento para viajes internacionales?',
      answer: 'Sí, contamos con expertos en viajes internacionales que te brindarán toda la información necesaria sobre visas, vacunas y otros requisitos.'
    },
    {
      question: '¿Puedo viajar con mi familia o grupo de amigos?',
      answer: 'Por supuesto, ofrecemos paquetes para grupos grandes y familiares. Puedes viajar con tus seres queridos y disfrutar de experiencias exclusivas.'
    },
    {
      question: '¿Necesito seguro de viaje?',
      answer: 'Aunque no es obligatorio, recomendamos contratar un seguro de viaje para tu tranquilidad y protección durante tu viaje.'
    },
    {
      question: '¿Hay descuentos para grupos?',
      answer: 'Sí, ofrecemos descuentos especiales para grupos y familias. ¡Consulta nuestras promociones para obtener más detalles!'
    }
  ];


  return (
    <>
      <div className="max-w-3xl mx-auto mt-16 mb-16">
        <h2 className="text-5xl font-bold tracking-wide text-center text-secondary mb-6">Preguntas frecuentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <Accordion key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </>
  )

}

export default FAQ;
