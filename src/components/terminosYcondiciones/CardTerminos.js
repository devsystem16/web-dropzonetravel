import React from "react";
const CardTerminos = ({ nombre, profesion, foto, descripcion, frase }) => {
  return (
    <div className="row">
      <div className="col-lg-5 pl-0 texto-central">
        Por favor, revise con detenimiento el documento de Términos y
        Condiciones.
      </div>
      <div className="col-lg-7 casso1 text-justify">
        <embed
          src="https://zonetravel.s3.us-east-2.amazonaws.com/documentos/T%C3%89RMINOS+Y+CONDICIONES.pdf"
          type="application/pdf"
          width="100%"
          height="550px"
        />
      </div>
    </div>
  );
};

export default CardTerminos;
