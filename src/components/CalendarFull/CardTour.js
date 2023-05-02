import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import "./cardTour.css";

import { transformTextDiasNoches } from "../../Environment/utileria";

export default function CardTour({ tour, fechaTour, imagen, title, descrip }) {
  const programacionFecha = tour?.programacionFechas.filter((programacion) => {
    return programacion.fecha === fechaTour;
  });

  console.log(programacionFecha);
  return (
    <Card
      sx={{ maxWidth: "90%", margin: "auto" }}
      transition-style="in:square:center"
      className="CardTour-content"
    >
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        style={{ textAlign: "center", fontSize: "40px", fontWeight: "bold" }}
        className="cartour-title"
      >
        {title}
      </Typography>
      <CardMedia
        component="img"
        // height="400px"
        image={imagen}
        alt="Cargando..."
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <div className="cardTour-content-text">
            <div className="cardTour-duracion margen">
              {transformTextDiasNoches(tour.duracion)}
            </div>

            <div
              className="cardTour-detalles"
              dangerouslySetInnerHTML={{ __html: tour.detalles }}
            ></div>

            <div className="negrita">INCLUYE:</div>
            <div
              className="cardTour-incluye"
              dangerouslySetInnerHTML={{ __html: tour.incluye }}
            ></div>

            <div className="negrita">LUGAR DE SALIDA:</div>

            <div
              className="cardTour-lugarSalida"
              dangerouslySetInnerHTML={{
                __html: tour.lugaresSalidas
                  .map((lugares) => {
                    return `<div> 🅿️ ${lugares.hora} ${lugares.descripcion}     </div>`;
                  })
                  .join(""), // unimos los elementos con una cadena vacía
              }}
            ></div>

            <div className="negrita">COSTO:</div>
            {/* return `<div>  💰 $ ${objPrecio.precio} ${objPrecio.descripcion}     </div>`; */}

            <div
              className="cardTour-costos margen"
              dangerouslySetInnerHTML={{
                __html: tour?.programacionFechas
                  .map((programacion) => {
                    if (programacion.fecha === fechaTour) {
                      return programacion.precios
                        .map((precios) => {
                          return `<div>  💰 $ ${precios.precio} ${precios.descripcion}     </div>`;
                        })
                        .join("");
                    }
                  })
                  .join(""),
              }}
            ></div>

            <div className="negrita"> RESERVACIÓN:</div>
            <div
              className="cardTour-incluye "
              dangerouslySetInnerHTML={{ __html: tour.informacionAdicional }}
            ></div>
          </div>
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        {/* <Button size="small">Ver más</Button> */}
      </CardActions>
    </Card>
  );
}
