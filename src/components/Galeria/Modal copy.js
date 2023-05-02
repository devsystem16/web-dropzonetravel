const Modal = ({ selectedImage, setSelectedImage }) => {
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <img src={selectedImage?.url} alt={selectedImage?.description} />
        <p>{selectedImage?.description}</p>
        <button onClick={handleCloseModal}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
