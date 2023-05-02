import { Link } from "react-router-dom";
import FullScreenDialog from "./Galeria/GaleryContent";
const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg custom_nav-container ">
      <a className="navbar-brand" href="index.html">
        <span>
          <img src="images/icon-page.png" alt="" />
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="d-flex  flex-column flex-lg-row align-items-center">
          <ul className="navbar-nav  ">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Inicio <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              {/* <Link to={"/"}> Quienes Somos</Link> */}
              <a className="nav-link" href="#informacionCompañia">
                {/* <a
                className="nav-link"
                href="https://web.whatsapp.com/send?phone=593995436392&amp;text=Hola Te Saludamos de Drop Zone Travel, Agencia de Viajes"
              > */}
                Quienes Somos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#eventos">
                Calendario
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#videosYoutube">
                Videos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                Nuestro Personal
              </a>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#experiencias">
                Experiencias
              </a> */}
              <FullScreenDialog></FullScreenDialog>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#terminos-condiciones">
                Términos y condiciones
              </a>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li> */}
          </ul>
          {/* <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
            <button
              className="btn  my-2 my-sm-0 nav_search-btn"
              type="submit"
            ></button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Menu;
