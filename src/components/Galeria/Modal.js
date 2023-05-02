import React, { useState } from "react";

const ModalImages = ({ imagenesModal, images, showModal, setShowModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div
      className={`modal ${showModal ? "show" : ""}`}
      onClick={() => setShowModal(false)}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[currentImageIndex]}
          alt={`Imagen ${currentImageIndex + 1}`}
          className="modal-img"
        />
        <div className="modal-nav">
          <button className="prev-btn" onClick={prevImage}>
            &lt; {"<<"}
          </button>
          <button className="next-btn" onClick={nextImage}>
            &gt; {">>"}
          </button>
        </div>
        <button className="close-btn" onClick={() => setShowModal(false)}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default ModalImages;
