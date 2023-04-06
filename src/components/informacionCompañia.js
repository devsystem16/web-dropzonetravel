import YouTube from "react-youtube";

const InformacionCompañia = () => {
  const videoId = "zpPaPqApavQ";
  const opts = {
    height: "390",
    width: "100%",

    playerVars: {
      autoplay: 0,
      modestbranding: 0,
    },
  };

  return (
    <section
      id="informacionCompañia"
      className="welcome_section layout_padding"
    >
      <div className="container-fluid">
        <div className="custom_heading-container">
          <h2>Bienvenido a la mejor agencia de viajes del Ecuador</h2>
        </div>
        <div className="layout_padding2">
          <div className="img-box">
            {/* Video aqui */}

            <YouTube videoId={videoId} opts={opts} />
            {/* <img src="images/welcome.png" alt="" /> */}
          </div>
          <div className="detail-box">
            <p>
              "¿Buscas la aventura de tu vida? En nuestra agencia de viajes, te
              llevamos a descubrir los lugares más increíbles del Ecuador con
              los mejores paquetes turísticos y las experiencias más
              emocionantes. Desde la cima de una montaña hasta la profundidad
              del mar, ¡nosotros te llevamos a vivir momentos inolvidables! Con
              nosotros, no tendrás que preocuparte por nada, nos encargamos de
              todo para que tú solo disfrutes al máximo. ¿Qué esperas para
              comenzar tu próxima aventura? Contáctanos ahora y descubre
              maravillosos lugares con nosotros."
            </p>
            <div>
              <a href="">Conocer más</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformacionCompañia;
