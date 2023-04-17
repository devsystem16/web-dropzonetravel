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
import Galeria from "./components/galeriaExperiencias/galeria";
import NuestroEquipo from "./components/nuestroEquipo/nuestroEquipo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TerminosYcondiciones from "./components/terminosYcondiciones/terminosYcondiciones";
const router = createBrowserRouter([{ path: "/", element: null }]);

function App() {
  return (
    // <RouterProvider router={router}>
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

      <InformacionCompañia></InformacionCompañia>

      <Servicios></Servicios>

      <Videos></Videos>
      <div id="eventos" className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <Galeria></Galeria>
          </div>
        </div>
      </div>
      <Eligenos></Eligenos>
      <NuestroEquipo></NuestroEquipo>
      <OpinionesClientes></OpinionesClientes>
      <TerminosYcondiciones></TerminosYcondiciones>
      <Contactanos></Contactanos>

      <Footer></Footer>
    </div>
    // </RouterProvider>
  );
}

export default App;
