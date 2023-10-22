import React, { useState , useEffect } from "react";
import SeatCard from "./SeatCard";
import useFetch from "../hooks/useFetch";
import "./BookSeat.css";

const BookSeat = ({ setOpen, trainId, seatNo }) => {
  const { data, loading, error } = useFetch(`/addTrain/seat/${trainId}`);
 
 
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // You can set the existing data to the trains state directly
    setTrains(data);
  }, [data]);
 

return (
    <>
      <div className="seat-booking-page">
        <h1>Seat Booking of {data[0].trainName} </h1>
        <h1>total {seatNo} seats</h1>
        <h1>below are the available seats</h1>
        {data.map((item) => ( 
          <div key={item._id}>
            <h1>price is : {item.price}</h1>
            {item.seatNumber?.map((seatNum) => (
              <SeatCard  seatNumber={seatNum.number} isValid={seatNum.unavailable} seatId ={seatNum._id} />
            ))}
          </div>
          //
        ))}

      </div>
    </>
  );
};

export default BookSeat;