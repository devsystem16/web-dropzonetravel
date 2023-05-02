import ContactMailIcon from "@mui/icons-material/ContactMail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
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
              <img
                src="https://zonetravel.s3.us-east-2.amazonaws.com/nuestros-servicios-bus/auto.jpg"
                alt=""
              />
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
              <a
                target="_blank"
                href="https://web.whatsapp.com/send?phone=593998662633&amp;text=
                Por favor, necesito cotizar el valor del vehículo para 4 personas."
              >
                <WhatsAppIcon /> Cotización
              </a>
            </div>
          </div>
          {/* adasas */}

          <div className="service_box">
            <div className="img-box">
              <img
                src="https://zonetravel.s3.us-east-2.amazonaws.com/nuestros-servicios-bus/mini-bus.jpg"
                alt=""
              />
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
              <a
                target="_blank"
                href="https://web.whatsapp.com/send?phone=593998662633&amp;text=
                Por favor, necesito cotizar el valor del vehículo para 18 personas."
              >
                <WhatsAppIcon /> Cotización
              </a>
            </div>
          </div>

          {/* asdsa */}
          <div className="service_box">
            <div className="img-box">
              <img
                src="https://zonetravel.s3.us-east-2.amazonaws.com/nuestros-servicios-bus/bus-fc.png"
                alt=""
              />
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
              <a
                target="_blank"
                href="https://web.whatsapp.com/send?phone=593998662633&amp;text=
                Por favor, necesito cotizar el valor del vehículo para 31 personas."
              >
                <WhatsAppIcon /> Cotización
              </a>
            </div>
          </div>
          {/* asdasd */}

          <div className="service_box">
            <div className="img-box">
              <img
                src="https://zonetravel.s3.us-east-2.amazonaws.com/nuestros-servicios-bus/bus-ak.jpg"
                alt=""
              />
            </div>
            <div className="detail-box">
              <h4>
                BUS (AK) <br />
                {/* Consultant */}
              </h4>
              <p>
                Dispone de Aire Acondicionado, Calefacción, Cargadores de
                Celulares, Equipo de Audio y Video, Asientos reclinables,
                capacidad máximo de 31 personas.
              </p>
              {/* <a href="#">Cotizar</a> */}

              <a
                target="_blank"
                href="https://web.whatsapp.com/send?phone=593998662633&amp;text=
                Por favor, necesito cotizar el valor del vehículo para 31 personas."
              >
                <WhatsAppIcon /> Cotización
              </a>
            </div>
          </div>
        </div>
        <div>{/* <a href="">Conocer más</a> */}</div>
      </div>
    </section>
  );
};

export default Servicios;
