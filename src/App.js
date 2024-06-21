import React, { useState, useEffect } from 'react';
import DateSelector from './components/DateSelector';
import SessionSelector from './components/SessionSelector';
import SeatSelector from './components/SeatSelector';
import { getDates, saveBooking, loadBookings } from './utils';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(getDates()[0]);
  const [selectedSession, setSelectedSession] = useState('10:00');
  const [seats, setSeats] = useState(new Array(50).fill({ reserved: false }));

  useEffect(() => {
    const bookings = loadBookings(selectedDate, selectedSession);
    setSeats(bookings);
  }, [selectedDate, selectedSession]);

  const handleSelectDate = (date) => {
    setSelectedDate(date);
    setSelectedSession('10:00');
  };

  const handleSelectSession = (session) => {
    setSelectedSession(session);
  };

  const handleToggleSeat = (index) => {
    const newSeats = seats.map((seat, i) =>
      i === index ? { ...seat, reserved: !seat.reserved } : seat
    );
    setSeats(newSeats);
    saveBooking(selectedDate, selectedSession, newSeats);
  };

  return (
    <Container>
      <h1>Movie Ticket Booking</h1>
      <Row className="my-4">
        <Col>
          <DateSelector
            dates={getDates()}
            selectedDate={selectedDate}
            onSelectDate={handleSelectDate}
          />
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <SessionSelector
            selectedSession={selectedSession}
            onSelectSession={handleSelectSession}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <SeatSelector seats={seats} onToggleSeat={handleToggleSeat} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
