import React, { useState  ,  useEffect} from 'react';
import './SeatCard.css'; // Import your CSS file

import axios from "axios";

const SeatCard = ({ seatNumber , isValid , seatId  }) => {


  const [isBooked, setBooked] = useState(false);




  const handleboooking = async() =>{
    try{
     await axios.put(`/seat/unavailable/${seatId}`)
     if(isValid){
      setBooked(false);
    }
    else{
      setBooked(true);
    }

    }
    catch(err){
 
    }
  }

  // console.log(seatId)



  return (
    <div className={`seat-card ${isBooked  ? 'booked' : ''}  ${isValid ? 'booked' : ''} `}>
       <h2>Seat {seatNumber}</h2>
      <h3> hola{isValid}</h3>
      <button onClick={handleboooking} disabled={isBooked}  >
      
        {isBooked || isValid ? 'Booked' : 'Book Seat'}
      </button>
    </div>
  );
}

export default SeatCard;
