import React from "react";
const CardPersonalParallax = ({
  nombre,
  profesion,
  foto,
  descripcion,
  frase,
}) => {
  return (
    <div className="row" style={{ backgroundColor: "black" }}>
      <div className="col-lg-5 pl-0">
        <img
          width="100%"
          height="100%"
          src="https://zonetravel.s3.us-east-2.amazonaws.com/jairo.jpg"
        ></img>
      </div>
      <div className="col-lg-5 casso1 text-justify">
        <h3> NOMBRE</h3>
        PROFESION<br></br>
        Gerente General Nací en la Ciudad de Riobamba el 24 de diciembre 1987. A
        la edad de 7 años me traslade a la ciudad de Quito y allí recibí mi
        formación académica, estudie en la Universidad Central del Ecuador donde
        obtuve mi Título en Licenciatura en Turismo Ecológico, elegí mi carrera
        porque me apasiona la naturaleza, la historia y la cultura, y es el
        medio adecuado para dar a conocer las riqueza natural y cultura de
        nuestro país a nuestros coterráneos y el resto del mundo.
        <br></br>
        <br></br>
        <br></br>
        <br></br>{" "}
        <p className="frase">
          {"<<"} DIOS LE DA PAN A QUIEN NO TIENE QUIJADA
          {">>"}
        </p>
      </div>
    </div>
  );
};

export default CardPersonalParallax;
