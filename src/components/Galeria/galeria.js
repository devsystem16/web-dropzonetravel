import React, { useState, useEffect } from "react";
import ModalImages from "./Modal";
import "./styleGaleria.css";
import API from "../../Environment/config";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

function Gallery(/*{ imageData }*/) {
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [imagenesModal, setImagenesModal] = useState([]);
  const handleImageClick = (tour, index) => {
    setShowModal(true);
    setActiveIndex(index);
    setSelectedImage(tour);

    var images = [];
    tour.imagenes.map((imagen) => {
      if (imagen.orden !== 1) {
        images.push(imagen.paths3);
      }
    });
    setImagenesModal(images);
  };

  const imageData = [
    {
      url: "https://zonetravel.s3.us-east-2.amazonaws.com/1.jpg",
      description: "balba",
    },
    {
      url: "https://zonetravel.s3.us-east-2.amazonaws.com/2.jpg",
      description: "balba",
    },
    {
      url: "https://zonetravel.s3.us-east-2.amazonaws.com/3.jpg",
      description: "balba",
    },
    {
      url: "https://zonetravel.s3.us-east-2.amazonaws.com/4.jpg",
      description: "balba",
    },
    {
      url: "https://zonetravel.s3.us-east-2.amazonaws.com/5.jpg",
      description: "balba",
    },
  ];

  useEffect(() => {
    loadTours();
  }, [selectedImage]);
  const images = [
    "https://zonetravel.s3.us-east-2.amazonaws.com/1.jpg",
    "https://zonetravel.s3.us-east-2.amazonaws.com/2.jpg",
    "https://zonetravel.s3.us-east-2.amazonaws.com/3.jpg",
    "https://zonetravel.s3.us-east-2.amazonaws.com/4.jpg",
  ];

  const [toursList, setToursList] = useState([]);
  const loadTours = async () => {
    const jsonTours = await API.post("/tour/experiencias/imagenes");

    setToursList(jsonTours.data);
  };

  return (
    <div className="gallery">
      {/* <Skeleton
        variant="rectangular"
        animation="pulse"
        width={"80%"}
        height={240}
      /> */}

      {toursList.map((tour, index) => {
        return (
          <div
            key={"imgTour" + index}
            className={`gallery-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleImageClick(tour, index)}
          >
            <div
              className="gallery-item-image"
              style={{ backgroundImage: `url(${tour.imagenes[0].paths3})` }}
            />
            <div className="gallery-item-description">{tour.titulo}</div>
          </div>
        );
      })}
      {/* {imageData.map((image, index) => (
        <div
          key={index}
          className={`gallery-item ${activeIndex === index ? "active" : ""}`}
          onClick={() => handleImageClick(image, index)}
        >
          <div
            className="gallery-item-image"
            style={{ backgroundImage: `url(${image.url})` }}
          />
          <div className="gallery-item-description">{image.description}</div>
        </div>
      ))} */}

      {isLoading && null}
      {showModal && (
        <ModalImages
          images={imagenesModal}
          showModal={showModal}
          //   imagenesModal={imagenesModal}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}

export default Gallery;
//   src="https://zonetravel.s3.us-east-2.amazonaws.com/2.jpg"
