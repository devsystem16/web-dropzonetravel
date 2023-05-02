const OpinionesClientes = () => {
  return (
    <section className="client_section layout_padding">
      <div className="container-fluid">
        <h2>Que Opinan nuestros clientes</h2>
        <div
          id="carouselExampleControls1"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="client_container layout_padding2">
                <div className="client_text">
                  <p>
                    "Mi experiencia con Drop Zone Travel fue increíble. El
                    equipo de atención al cliente estuvo siempre a mi
                    disposición, ayudándome en todo lo que necesitaba. Los
                    paquetes turísticos se adaptaron perfectamente a mis
                    necesidades y presupuesto, y la atención personalizada me
                    hizo sentir cómodo y seguro durante todo el viaje. Gracias a
                    Drop Zone Travel, pude disfrutar de una aventura única. ¡Los
                    recomiendo al 100%!"
                  </p>
                </div>
                <div className="detail-box">
                  <div className="img-box">
                    <img src="images/cliente2.png" alt="" />
                  </div>
                  <div className="name">
                    <h5>Mychael Castro</h5>
                    <p>Quevedo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="client_container layout_padding2">
                <div className="client_text">
                  <p>
                    "Recomiendo Drop Zone Travel por su excelente servicio al
                    cliente y atención personalizada. Desde el primer contacto,
                    me brindaron una asesoría completa y detallada, y durante el
                    viaje estuvieron pendientes de cada detalle para asegurarse
                    de que todo estuviera en orden y yo estuviera disfrutando al
                    máximo. Sin duda, volveré a viajar con ellos en el futuro.
                    ¡Gracias Drop Zone Travel por hacer de mi viaje una
                    experiencia inolvidable!"
                  </p>
                </div>
                <div className="detail-box">
                  <div className="img-box">
                    <img src="images/cliente3.png" alt="" />
                  </div>
                  <div className="name">
                    <h5>Marco Monta</h5>
                    <p>Quito</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="client_container layout_padding2">
                <div className="client_text">
                  <p>
                    "Mi experiencia con Drop Zone Travel fue excepcional. Su
                    equipo de expertos en viajes me brindó una atención
                    personalizada y soluciones rápidas ante cualquier
                    inconveniente. Los paquetes turísticos que me ofrecieron
                    estuvieron adaptados a mis necesidades y presupuesto. Sin
                    duda, recomiendo viajar con ellos para vivir una aventura
                    única y memorable."
                  </p>
                </div>
                <div className="detail-box">
                  <div className="img-box">
                    <img src="images/client.png" alt="" />
                  </div>
                  <div className="name">
                    <h5>Joans Mark</h5>
                    <p>cal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls1"
            role="button"
            data-slide="prev"
          >
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls1"
            role="button"
            data-slide="next"
          >
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OpinionesClientes;
