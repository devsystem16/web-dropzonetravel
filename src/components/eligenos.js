import React, { useState, useEffect } from "react";
import API from "../Environment/config";

const Eligenos = () => {
  const [cantidadClientes, setCantidadClient] = useState(1);

  const loadData = async () => {
    var response = await API.get("/cliente/count/obtener");
    setCantidadClient(response.data);
  };

  useEffect(() => {
    loadData();
  }, [cantidadClientes]);

  return (
    <section className="why_section layout_padding">
      <div className="container-fluid">
        <div className="custom_heading-container">
          <h2>¿Por qué elegirnos?</h2>
        </div>
        <div className="content-container">
          <p>
            Elige Drop Zone Travel para una experiencia de viaje inolvidable con
            atención personalizada, precios competitivos y paquetes turísticos
            adaptados a tus necesidades y presupuesto. Ofrecemos un servicio al
            cliente excepcional para brindarte confianza y tranquilidad durante
            todo el viaje. Contáctanos hoy mismo para planificar tu próximo
            destino.
          </p>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="img-box">
                <img src="images/smiley.png" alt="" />
              </div>
              <div className="detail-box">
                <h3>99%</h3>
                <h6>CLIENTES SATISFECHOS</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="img-box">
                <img src="images/monitor.png" alt="" />
              </div>
              <div className="detail-box">
                <h3>4700+</h3>
                <h6>planificación IMPRESIONANTE</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="img-box">
                <img src="images/multiple-users-silhouette.png" alt="" />
              </div>
              <div className="detail-box">
                <h3>{cantidadClientes}+</h3>
                <h6>CLIENTS</h6>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="img-box">
                <img src="images/bar-chart.png" alt="" />
              </div>
              <div className="detail-box">
                <h3>100+</h3>
                <h6>DESTINOS</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligenos;
