import Menu from "./components/menu";
import Slider from "./components/slider";
import InformacionCompañia from "./components/informacionCompañia";
import "./App.css";
import Servicios from "./components/Servicios";
import Eligenos from "./components/eligenos";
import OpinionesClientes from "./components/opinionesClientes";
import Contactanos from "./components/contactanos";
import Footer from "./components/Footer";
import Videos from "./components/videos";
import Calendario from "./components/CalendarFull/calendario";
import NuestroEquipo from "./components/nuestroEquipo/nuestroEquipo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TerminosYcondiciones from "./components/terminosYcondiciones/terminosYcondiciones";
import Gallery from "./components/Galeria/galeria";
import FullScreenDialog from "./components/Galeria/GaleryContent";
import BotonContacto from "./components/BotonContacto/BotonContacto";
import ParallaxImage from "./components/ParallaxImage/ParallaxImage";
import ParallaxTarjeta from "./components/ParallaxImage/ParallaxTarjeta";
const router = createBrowserRouter([{ path: "/", element: null }]);

function App() {
  return (
    <div className="App">
      <div className="hero_area">
        <header className="header_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-11">
                <Menu></Menu>
              </div>
            </div>
          </div>
        </header>

        <Slider></Slider>
      </div>
      {/* <Gallery></Gallery> */}
      {/* <FullScreenDialog></FullScreenDialog> */}
      <InformacionCompañia></InformacionCompañia>
      <Servicios></Servicios>
      <Videos></Videos>
      <div id="eventos" className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <Calendario></Calendario>
          </div>
        </div>
      </div>
      <Eligenos></Eligenos>
      <ParallaxImage
        id="team"
        titulo="VEN Y CONOCE A NUESTRO EQUIPO"
        Textcss="oscuro"
        img="https://zonetravel.s3.us-east-2.amazonaws.com/23000381_786258204890123_8201811803932776670_o.jpg"
      />
      {/* <ParallaxImage
        titulo=""
        Textcss="claro"
        img="https://zonetravel.s3.us-east-2.amazonaws.com/frases-equipo/frase+Jairo.png"
      />
      <hr
        style={{ backgroundColor: "black", padding: "0", margin: "4px" }}
      ></hr>
      <ParallaxImage
        titulo=""
        Textcss="claro"
        img="https://zonetravel.s3.us-east-2.amazonaws.com/frases-equipo/frase+dristhian.png"
      />
      <hr
        style={{ backgroundColor: "black", padding: "0", margin: "4px" }}
      ></hr>
      <ParallaxImage
        titulo=""
        Textcss="claro"
        img="https://zonetravel.s3.us-east-2.amazonaws.com/frases-equipo/frase+marcelo.png"
      /> */}
      <NuestroEquipo></NuestroEquipo>
      <OpinionesClientes></OpinionesClientes>
      <div>
        <ParallaxImage
          id="terminos-condiciones"
          titulo="TERMINOS Y CONDICIONES"
          img="https://zonetravel.s3.us-east-2.amazonaws.com/terminos.jpg"
        />
        {/* <p>Aquí van los términos y condiciones</p> */}
      </div>
      <TerminosYcondiciones></TerminosYcondiciones>
      <BotonContacto></BotonContacto>
      <br /> <br /> <br /> <br /> <br />
      {/* <Contactanos></Contactanos> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
