import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

import ContactMailIcon from "@mui/icons-material/ContactMail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import "./styleBotonContacto.css";
const actions = [
  {
    icon: (
      <a
        target="_blank"
        href="https://web.whatsapp.com/send?phone=593995193959&amp;text=Hola, necesito información."
      >
        <WhatsAppIcon />
      </a>
    ),
    name: "Escribenos a WhatsApp",
  },
  {
    icon: (
      <a target="_blank" href="https://www.facebook.com/Dropzonetravel593">
        <FacebookIcon />
      </a>
    ),
    name: "Escribenos o visitanos en Facebook",
  },
  {
    icon: (
      <a target="_blank" href="https://www.instagram.com/dropzonetravel593/">
        <InstagramIcon />
      </a>
    ),
    name: "Visita nuestro Instagram",
  },
  {
    icon: (
      <a target="_blank" href="https://twitter.com/dropzonetravel">
        <TwitterIcon />
      </a>
    ),
    name: "Visita nuestro Twitter",
  },
];

export default function ControlledOpenSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      className="botonContactos"
      sx={{ transform: "translateZ(0px)", flexGrow: 1 }}
    >
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<ContactMailIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
