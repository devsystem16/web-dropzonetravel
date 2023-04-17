import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CardTour({ imagen, title, descrip }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        style={{ textAlign: "center" }}
      >
        {title}
      </Typography>
      <CardMedia
        component="img"
        height="140"
        image={imagen}
        alt="Cargando..."
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {descrip}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
