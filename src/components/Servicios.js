const Servicios = () => {
  return (
    <section className="service_section">
      <div className="container-fluid">
        <div className="custom_heading-container">
          <h2>Nuestros Servicios</h2>
        </div>
        <div className="service_container layout_padding2">
          <div className="service_box">
            <div className="img-box">
              <img src="images/nuestrosServicios/auto.jpg" alt="" />
            </div>
            <div className="detail-box">
              <h4>
                Vehiculo <br />
                {/* Consultant */}
              </h4>
              <p>
                Dispone de Aire Acondicionado, Calefacción, Equipo de Audio,
                Ventanas Eléctricas, Asientos Confortables, Maletero Amplio
                capacidad máximo de 4 personas.
              </p>
            </div>
          </div>
          <div className="service_box">
            <div className="img-box">
              <img src="images/nuestrosServicios/bus-ak.jpg" alt="" />
            </div>
            <div className="detail-box">
              <h4>
                MINI BUS <br />
                {/* Analytics */}
              </h4>
              <p>
                Dispone de Aire Acondicionado, Calefacción, Cargadores de
                Celulares, Equipo de Audio y Video, Asientos reclinables,
                capacidad máximo de 18 personas.
              </p>
            </div>
          </div>
          <div className="service_box">
            <div className="img-box">
              <img src="images/nuestrosServicios/bus-fc.png" alt="" />
            </div>
            <div className="detail-box">
              <h4>
                BUS (FC) <br />
                {/* Planning */}
              </h4>
              <p>
                Dispone de Aire Acondicionado, Calefacción, Cargadores de
                Celulares, Equipo de Audio y Video, Asientos reclinables,
                capacidad máximo de 31 personas.
              </p>
            </div>
          </div>
        </div>
        <div>
          <a href="">Conocer más</a>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
