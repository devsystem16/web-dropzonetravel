import Menu from "./components/menu";
import Slider from "./components/slider";
import InformacionCompañia from "./components/informacionCompañia";
import "./App.css";
import Servicios from "./components/Servicios";
import Eligenos from "./components/eligenos";
import OpinionesClientes from "./components/opinionesClientes";
import Contactanos from "./components/contactanos";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="hero_area">
        <header className="header_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8">
                <Menu></Menu>
              </div>
            </div>
          </div>
        </header>

        <Slider></Slider>
      </div>

      <InformacionCompañia></InformacionCompañia>

      <Servicios></Servicios>

      <Eligenos></Eligenos>

      <OpinionesClientes></OpinionesClientes>

      <Contactanos></Contactanos>

      <Footer></Footer>
    </div>
  );
}

export default App;
