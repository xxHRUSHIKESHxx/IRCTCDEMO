import React, { useState } from "react";
import SeatCard from "./SeatCard";
import useFetch from "../hooks/useFetch";

const BookSeat = (setOpen, totalSeat, trainId) => {
  const { data, loading, error } = useFetch(`/addTrain/seat/${trainId}`);

  const [isBooked, setBooked] = useState(false);

  const handleBookSeat = () => {
    setBooked(true);
  };

  const numberOfSeats = totalSeat;
  console.log(totalSeat);
  return (
    <>
      <div className="seat-booking-page">
        <h1>Seat Booking</h1>

        <div className="seat-cards">
          {data.map((item) => (
            <div className={`seat-card ${isBooked ? "booked" : ""}`}>
              <h2>Seat {seatNumber}</h2>
              <h3>{name}</h3>
              <button onClick={handleBookSeat} disabled={isBooked}>
                {isBooked ? "Booked" : "Book Seat"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookSeat;
