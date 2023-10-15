import React, { useState } from 'react';
import './SeatCard.css'; // Import your CSS file

function SeatCard({ seatNumber , name }) {
  const [isBooked, setBooked] = useState(false);

  const handleBookSeat = () => {
    setBooked(true);
  };

  return (
    <div className={`seat-card ${isBooked ? 'booked' : ''}`}>
      
      <h2>Seat {seatNumber}</h2>
      <h3>{name}</h3>
      <button onClick={handleBookSeat} disabled={isBooked}>
        {isBooked ? 'Booked' : 'Book Seat'}
      </button>
    </div>
  );
}

export default SeatCard;
