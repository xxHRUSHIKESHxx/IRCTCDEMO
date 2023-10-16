import React ,{useState} from 'react'
import "./updateTrain.css"
const UpdateTrain = () => {
  const [train, setTrain] = useState({
    name: '',
    from: '',
    to: '',
    price: '',
    seats: '',
    availableSeats: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrain({ ...train, [name]: value });
  };
 return (
    <div className="form-container">
      <h2>Add a New Train</h2>
      <form className="train-form">
        <label>
          Name:
          <input type="text" name="name" value={train.name} onChange={handleChange} />
        </label>
  
        <label>
          From:
          <input type="text" name="from" value={train.from} onChange={handleChange} />
        </label>
  
        <label>
          To:
          <input type="text" name="to" value={train.to} onChange={handleChange} />
        </label>
  
        <label>
          Price:
          <input type="text" name="price" value={train.price} onChange={handleChange} />
        </label>
  
        <label>
          Total Seats:
          <input type="text" name="seats" value={train.seats} onChange={handleChange} />
        </label>
  
        <label>
          Available Seats:
          <input type="text" name="availableSeats" value={train.availableSeats} onChange={handleChange} />
        </label>
  
        <button type="submit" className="submit-button">
          Add Train
        </button>
      </form>
    </div>
  );
  
}

export default UpdateTrain

