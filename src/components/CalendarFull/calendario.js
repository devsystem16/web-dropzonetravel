import React, { useState, useEffect } from "react";
import "./galeria.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import API from "../../Environment/config";
import { transformText } from "../../Environment/utileria";
import esLocale from "@fullcalendar/core/locales/es";
import Modal from "react-modal";
import Button from "@mui/material/Button";
import moment from "moment";

import CardTour from "./CardTour";
import "./calendario.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Calendario = () => {
  const [eventos, setEventos] = useState([]);
  const [open, setOpen] = React.useState(false);

  const [datos, setDatos] = React.useState({
    img: "https://zonetravel.s3.us-east-2.amazonaws.com/1.jpg",
    title: "GUANÁBANA REPUBLIC + YAHUARCOCHA",
    desc: "",
  });

  const [tour, setTour] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEventMouseEnter = (info) => {
    // alert(`El usuario pasó el mouse por el evento ${info.event.title}`);
    // setSelectedEvent(info.event);
    setTour(info?.event?.extendedProps?.tourFull);
    setDatos({
      ...datos,
      img: info.event.extendedProps?.img,
      title: info.event.title,
      desc: info.event.extendedProps?.descipcion,
      fechaTour: info.event.extendedProps?.fechaTour,
    });
    // setModalIsOpen(true);
    setOpen(true);
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
  };

  const loadData = async () => {
    try {
      var response = await API.post("/tour/listado/tabla", {
        mostrarFechasOld: true,
      });

      const result = response?.data.flatMap((tour) => {
        return tour.programacionFechas.map((programacion) => {
          const fecha1 = moment(programacion.fecha).format("YYYY-MM-DD");
          const fechaInicial = moment(programacion.fecha);
          const diasASumar = transformText(tour.duracion);

          const fechaFinal = fechaInicial.add(diasASumar, "days");
          // console.log("fechaInicial", fechaInicial.format("YYYY-MM-DD"));
          // console.log("fechaFinal", fechaFinal.format("YYYY-MM-DD"));
          if (false) {
          } else
            return {
              tourFull: tour,
              img: tour.imagen,
              title: tour.titulo,
              descipcion: tour.detalles,
              fechaTour: programacion.fecha,
              color: "#559d2e",
              start: programacion.fecha,
              end: fechaFinal.format("YYYY-MM-DD"),
            };
        });
      });

      setEventos(result);
      // alert(JSON.stringify(result));
    } catch (error) {
      // alertify.error("Ocurrió un error. Al carcar los valores." + error);
      return;
    }
  };

  // function eventoMouseEnter(info) {
  //   info.event.setProp("cursor", "pointer");
  // }

  // function eventoMouseLeave(info) {
  //   info.event.setProp("cursor", "default");
  // }

  // function eventoDidMount(info) {
  //   const eventoEl = info.el;
  //   eventoEl.style.cursor = info.event.extendedProps.cursor || "default";
  // }

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <center>
        <h2>Eventos</h2>
      </center>
      <FullCalendar
        // eventMouseEnter={eventoMouseEnter}
        // eventMouseLeave={eventoMouseLeave}
        // eventDidMount={eventoDidMount}
        eventClick={handleEventMouseEnter}
        plugins={[dayGridPlugin]}
        height="600px"
        aspectRatio={2}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "prev,next today",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        locales={[esLocale]}
        locale="es"
        events={
          eventos

          //   [
          //   {
          //     img: "https://zonetravel.s3.us-east-2.amazonaws.com/1.jpg",
          //     title: "Guanábana Repúblic",
          //     descipcion: "Descripcion 1",
          //     start: "2023-04-20",
          //     end: "2023-04-23",
          //   },

          // ]
        }
      />

      {open && (
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          fullScreen={true}
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent className="calendario-content">
            <DialogContentText id="alert-dialog-slide-description">
              <CardTour
                tour={tour}
                title={datos.title}
                descrip={datos.desc}
                imagen={datos.img}
                fechaTour={datos.fechaTour}
              ></CardTour>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={handleClose}>Contactar</Button> */}
            <Button
              style={{ backgroundColor: "red", color: "white" }}
              onClick={handleClose}
            >
              Salir
            </Button>
          </DialogActions>
        </Dialog>
      )}
      {/* {selectedEvent && (
        <EventModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          event={selectedEvent}
          setModalIsOpen={setModalIsOpen}
        />
      )} */}
    </div>
  );
};

function EventModal({ isOpen, onClose, event, setModalIsOpen }) {
  return (
    <Modal
      style={{ backgroundColor: "red", zindex: "99999" }}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <h2>{event.title}</h2>
      <p>{event.start.toDateString()}</p>
      <p>{event.description}</p>
      <button onClick={() => setModalIsOpen(false)}> Cerrar</button>
    </Modal>
  );
}

export default Calendario;
