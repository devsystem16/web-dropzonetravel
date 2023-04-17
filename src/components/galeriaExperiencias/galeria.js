import React, { useState } from "react";
import "./galeria.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

import esLocale from "@fullcalendar/core/locales/es";
import Modal from "react-modal";
import Button from "@mui/material/Button";

import CardTour from "../calendario/CardTour";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Galeria = () => {
  const [open, setOpen] = React.useState(false);

  const [datos, setDatos] = React.useState({
    img: "https://zonetravel.s3.us-east-2.amazonaws.com/1.jpg",
    title: "GUANÁBANA REPUBLIC + YAHUARCOCHA",
    desc: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEventMouseEnter = (info) => {
    // alert(`El usuario pasó el mouse por el evento ${info.event.title}`);
    // setSelectedEvent(info.event);
    // alert(JSON.stringify(info));

    setDatos({
      ...datos,
      img: info.event.extendedProps?.img,
      title: info.event.title,
      desc: info.event.extendedProps?.descipcion,
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

  return (
    <div>
      <center>
        <h2>Eventos</h2>
      </center>
      <FullCalendar
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
        events={[
          {
            img: "https://zonetravel.s3.us-east-2.amazonaws.com/1.jpg",
            title: "Guanábana Repúblic",
            descipcion: "Descripcion 1",
            start: "2023-04-20",
            end: "2023-04-23",
          },
          {
            img: "https://zonetravel.s3.us-east-2.amazonaws.com/2.jpg",
            title: "Chachimbiro",
            descipcion: "Descripcion 2",
            date: "2023-04-16",
          },
          {
            img: "https://zonetravel.s3.us-east-2.amazonaws.com/3.jpg",
            title: "Chachimbiro",
            descipcion: "Descripcion 3",
            date: "2023-04-23",
          },

          {
            img: "https://zonetravel.s3.us-east-2.amazonaws.com/4.jpg",
            title: "Ipiales",
            descipcion: "Descripcion 4",
            date: "2023-04-18",
          },
          {
            img: "https://zonetravel.s3.us-east-2.amazonaws.com/5.jpg",
            title: "Oyacachi",
            descipcion: "Descripcion 5",
            date: "2023-04-30",
          },
          {
            img: "https://zonetravel.s3.us-east-2.amazonaws.com/6.jpg",
            title: "Chimborazo",
            descipcion: "Descripcion 6",
            date: "2023-04-23",
          },
          {
            img: "https://zonetravel.s3.us-east-2.amazonaws.com/7.jpg",
            title: "Máncora",
            descipcion: "Descripcion 7",
            date: "2023-04-28",
          },
          {
            img: "https://zonetravel.s3.us-east-2.amazonaws.com/1.jpg",
            title: "Máncora",
            descipcion: "Descripcion 8",
            date: "2023-05-25",
          },
        ]}
      />

      {open && (
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <CardTour
                title={datos.title}
                descrip={datos.desc}
                imagen={datos.img}
              ></CardTour>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Contactar</Button>
            <Button onClick={handleClose}>Salir</Button>
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

export default Galeria;
