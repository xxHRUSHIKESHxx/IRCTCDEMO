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
 
  console.log(seatNo);

  console.log(data[0]);
  console.log(data[0].seatNumber);

  // const numberOfSeats = Seats;
  // const xyz = Seats;
  // console.log(numberOfSeats);
  // console.log(xyz+"hello ");
  // console.log("hello world")

  const [isBooked, setBooked] = useState(false);
  const[selectedSeats , setSelectedSeats] = useState([]);
  const handleSelect =(e) =>{
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedSeats(
      checked ? [...selectedSeats , value] : selectedSeats.filter((item) => item !== value)
    )
  }
  console.log(selectedSeats);

  const handleBookSeat = (xyz) => {
    setBooked(true);
  };

  

  return (
    <>
      <div className="seat-booking-page">
        <h1>Seat Booking of {data[0].trainName} </h1>
        <h1>total {seatNo} seats</h1>
        <h1>below are the available seats</h1>
        {data.map((item) => (
          <div key={item._id}>
            <h1>price is : {item.price}</h1>
            {item.seatNumber?.map((seatNumber) => (
              // <SeatCard  seatNumber={seatNumber.number} />
              <div key={seatNumber._id} className={`seat-card ${isBooked ? 'booked' : ''}`}>
              
              <button>
                select the seat
              <input disabled={seatNumber.unavailable || isBooked } type="checkbox" value={seatNumber._id} onChange={handleSelect} />
             
              </button>
              
              <h2>Seat {seatNumber.number}</h2>
              
              {/* <h3>{name}</h3> */}
              <button key={seatNumber._id} onClick={() =>handleBookSeat(seatNumber._id)} disabled={isBooked}>
                {isBooked ? 'Booked' : 'Book Seat'}
              </button>
            </div>
            ))}
          </div>
          //
        ))}

      </div>
    </>
  );
};

export default BookSeat;
{
  /* <div className={`seat-card ${isBooked ? "booked" : ""}`}>
          <h2>{item.seatNumber}</h2>
          <h3></h3>
          <button onClick={handleBookSeat} disabled={isBooked}>
            {isBooked ? "Booked" : "Book Seat"}
          </button>
        </div> */
}

{
  /* <div className="seat-cards">
        <SeatCard seatNumber={availableSeats}  />
        </div> */
}
