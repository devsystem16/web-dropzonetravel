import React from "react";
const CardPersonal = ({ nombre, profesion, foto, descripcion, frase }) => {
  return (
    <div className="row">
      <div className="col-lg-5 pl-0">
        <img width="100%" height="100%" src={foto}></img>
      </div>
      <div className="col-lg-5 casso1 text-justify">
        <h3> {nombre}</h3>
        {profesion} <br></br>
        {descripcion}
        <br></br>
        <br></br>
        <br></br>
        <br></br>{" "}
        <p className="frase">
          {"<<"} {frase}
          {">>"}
        </p>
      </div>
    </div>
  );
};

export default CardPersonal;
