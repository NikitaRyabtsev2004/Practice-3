import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const SeatSelector = ({ seats, onToggleSeat }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedSeat, setSelectedSeat] = React.useState(null);

  const handleShowModal = (index) => {
    setSelectedSeat(index);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleSelectSeat = () => {
    onToggleSeat(selectedSeat);
    handleCloseModal();
  };

  return (
    <div className="seat-selector">
      {seats.map((seat, index) => (
        <Button
          key={index}
          variant={seat.reserved ? 'danger' : 'success'}
          onClick={() => handleShowModal(index)}
          className="seat-button"
        >
          {index + 1}
        </Button>
      ))}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Seat Selection</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Do you want to {seats[selectedSeat]?.reserved ? 'unreserve' : 'reserve'} seat {selectedSeat + 1}?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSelectSeat}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SeatSelector;
