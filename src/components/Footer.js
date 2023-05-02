const Footer = () => {
  return (
    <div id="DropZoneTravelFooter" className="footer_bg">
      <section className="info_section layout_padding2-bottom">
        <div className="container-fluid">
          <h3 className="">Drop Zone Travel</h3>
        </div>
        <div className="container-fluid info_content">
          <div>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="d-flex">
                  <h5>GERENCIA</h5>
                </div>
                <div className="d-flex ">
                  <ul>
                    <li>
                      <a href="#DropZoneTravelFooter">Gerente General</a>
                    </li>
                    {/* <li>
                      <a href="#DropZoneTravelFooter">About services</a>
                    </li>
                    <li>
                      <a href="#DropZoneTravelFooter">About Departments</a>
                    </li>
                    <li>
                      <a href="#DropZoneTravelFooter">Services</a>
                    </li>
                    <li>
                      <a href="#DropZoneTravelFooter">Contact Us</a>
                    </li> */}
                  </ul>
                  <ul className="ml-3 ml-md-5">
                    <li>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/JairoIsraelSerrano"
                      >
                        Jairo Serrano
                      </a>
                    </li>
                    {/* <li>
                      <a href="#DropZoneTravelFooter">Loram ipusm</a>
                    </li>
                    <li>
                      <a href="#DropZoneTravelFooter">Loram ipusm</a>
                    </li>
                    <li>
                      <a href="#DropZoneTravelFooter">Loram ipusm</a>
                    </li>
                    <li>
                      <a href="#DropZoneTravelFooter">Loram ipusm</a>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="d-flex">
                  <h5>Nuestros Servicios</h5>
                </div>
                <div className="d-flex ">
                  <ul>
                    <li>
                      <a href="#DropZoneTravelFooter">Transporte</a>
                    </li>
                    <li>
                      <a href="#DropZoneTravelFooter">Alimentación</a>
                    </li>
                    <li>
                      <a href="#DropZoneTravelFooter">Entrada a los lugares a visitar</a>
                    </li>
                    <li>
                      <a href="#DropZoneTravelFooter">Paseo en lancha</a>
                    </li>
                    <li>
                      <a href="#DropZoneTravelFooter">Seguro de accidente vial</a>
                    </li>
                  </ul>
                  <ul className="ml-3 ml-md-5">
                    <li>
                      <a href="#DropZoneTravelFooter"> Guía</a>
                    </li>
                    <li>
                      <a href="#DropZoneTravelFooter">Alojamiento</a>
                    </li>
                    <li>
                      <a href="#DropZoneTravelFooter">Asesoramiento</a>
                    </li>
                    {/* <li>
                      <a href="#DropZoneTravelFooter">sed do eiusmod</a>
                    </li>
                    <li>
                      <a href="#DropZoneTravelFooter">tempor incididunt</a>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="d-flex">
                  <h5>Contactos</h5>
                </div>
                <div className="d-flex ">
                  <ul>
                    <li>
                      <a href="#DropZoneTravelFooter">Correo</a>
                    </li>
                    <li>
                      <a href="#DropZoneTravelFooter">Oficinas</a>
                    </li>
                    <li>
                      <a href="#DropZoneTravelFooter">Reservas</a>
                    </li>
                    {/* <li>
                      <a href="#DropZoneTravelFooter">Services</a>
                    </li>
                    <li>
                      <a href="#DropZoneTravelFooter">Contact Us</a>
                    </li> */}
                  </ul>
                  <ul className="ml-3 ml-md-5">
                    <li>
                      <a href="mailto:info@dropzonetravel.com.ec">
                        <span id="et-info-email">
                          info@dropzonetravel.com.ec
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#DropZoneTravelFooter">022370853</a>
                    </li>
                    <li>
                      <a href="#DropZoneTravelFooter">0995193959</a>
                    </li>
                    {/* <li>
                      <a href="#DropZoneTravelFooter">adipiscing</a>
                    </li>
                    <li>
                      <a href="#DropZoneTravelFooter">elit, sed do eiusmod</a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-baseline">
            <div className="social-box">
              <a href="https://www.facebook.com/Dropzonetravel593">
                <img src="images/fb.png" alt="" />
              </a>

              <a href="https://twitter.com/dropzonetravel">
                <img src="images/twitter.png" alt="" />
              </a>
              {/* <a href="#DropZoneTravelFooter">
                <img src="images/linkedin1.png" alt="" />
              </a> */}
              <a href="https://www.instagram.com/dropzonetravel593/">
                <img src="images/instagram1.png" alt="" />
              </a>
            </div>
            {/* <div className="form_container mt-5">
              <form action="">
                <label for="subscribeMail">Newsletter</label>
                <input
                  type="email"
                  placeholder="Enter Your email"
                  id="subscribeMail"
                />
                <button type="submit">Subscribe</button>
              </form>
            </div> */}
          </div>
        </div>
      </section>

      <section className="container-fluid footer_section">
        <p>
          © Drop Zone Travel 2023 Todos los derechos reservados
          {/* <a href="https://html.design/">Free Html Templates</a> */}
        </p>
      </section>
    </div>
  );
};

export default Footer;
