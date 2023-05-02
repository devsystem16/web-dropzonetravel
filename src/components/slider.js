const Slider = () => {
  return (
    <section className="slider_section">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        style={{ textAlign: "left" }}
      >
        <ol className="carousel-indicators"></ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-5 col-md-6">
                  <div className="slider_detail-box">
                    <h1>"Viajes Guiados a Destinos Increíbles del País"</h1>
                    <p>
                      Nuestra agencia lleva a los viajeros a explorar todos los
                      destinos turísticos de Ecuador con tours bien planificados
                      y guiados por expertos. Desde las Islas Galápagos hasta la
                      selva amazónica, ofrecemos una experiencia de viaje
                      inolvidable.
                    </p>
                    <div className="btn-box">
                      <a href="#informacionCompañia" className="btn-1">
                        Conocer más
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="slider_img-box"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-6">
                  <div className="slider_detail-box">
                    <h1>
                      Experimenta la mejor atención al cliente en tus viajes.
                    </h1>
                    <p>
                      Además, nos enorgullece ofrecer un servicio al cliente
                      excepcional, con atención personalizada y soluciones
                      rápidas para cualquier problema que pueda surgir durante
                      tu viaje. ¡No esperes más para vivir la aventura de tus
                      sueños! Contáctanos hoy mismo y déjanos hacer realidad tus
                      planes de viaje.
                    </p>
                    <div className="btn-box">
                      <a href="#informacionCompañia" className="btn-1">
                        Conocer más
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="slider_img-box">
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-6">
                  <div className="slider_detail-box">
                    <h1>Tu mejor experiencia de viaje, garantizada.</h1>
                    <p>
                      Con una amplia gama de opciones de alojamiento, transporte
                      y actividades, nos aseguraremos de que tengas una
                      experiencia inolvidable.
                    </p>
                    <div className="btn-box">
                      <a href="#informacionCompañia" className="btn-1">
                        Conocer más
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="slider_img-box">
                    <img src="images/slider-img.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-container">
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      {/* <ul className="circles">
        <li> </li>
        <li> </li>

        <li>
          <img src="images/avion.png"></img>
        </li>
        <li>
          <img src="images/avion.png"></img>
        </li>
        <li>
          <img src="images/avion.png"></img>
        </li>
        <li>
          <img src="images/avion.png"></img>
        </li>
      </ul> */}
    </section>
  );
};

export default Slider;
