import React from "react";
import "./terminosYcondiciones.css";
import CardPersonal from "./CardTerminos";
const TerminosYcondiciones = () => {
  return (
    <div className="container-fluid" id="terminos">
      {/* <section className="parallaxTerminos">
        <div className="parallax-inner">
          <h1 style={{ color: "white", fontWeight: "bold" }}>
            TERMINOS Y CONDICIONES
          </h1>
        </div>
      </section> */}
      <section>
        <div></div>
      </section>
      <br />
      <br />
      <br />
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

      <hr className="LineaSeparacion"></hr>
    </div>
  );
};

export default TerminosYcondiciones;
