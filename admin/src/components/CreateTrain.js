
import React, { useState } from 'react';
import './CreateTrain.css'; // Include your CSS file here
 import axios from 'axios';

const CreateTrain = () => {

// const [trains, setTrains] = useState([]);
const [formData, setFormData] = useState({
  name: '',
  from: '',
  to: '',
  price: '',
  seats: [],
  availableSeats: 0,
});

const handleCreateTrain = async() =>{
    try{
      await axios.post(`/addTrain` , formData);
     setFormData({
      name: '',
      from: '',
      to: '',
      price: '',
      seats: [],
      availableSeats: 0,
     })
      // console.log("data is sent",response.data);
      }
     catch(err){
      console.log(err);
     }
   }
  



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, e.g., send the data to a server or perform some action
    console.log('Form submitted with data:', formData);
  };


  return (
    <div className="form-container">
    <form onSubmit={handleCreateTrain}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="from">From:</label>
      <input
        type="text"
        id="from"
        name="from"
        value={formData.from}
        onChange={handleChange}
      />

      <label htmlFor="to">To:</label>
      <input
        type="text"
        id="to"
        name="to"
        value={formData.to}
        onChange={handleChange}
      />

      <label htmlFor="price">Price:</label>
      <input
        type="text"
        id="price"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />

      {/* <label htmlFor="seats">Seats:</label>
      <input
        type="number"
        id="seats"
        name="seats"
        value={formData.seats}
        onChange={handleChange}
      /> */}

      <label htmlFor="availableSeats">Available Seats:</label>
      <input
        type="number"
        id="availableSeats"
        name="availableSeats"
        value={formData.availableSeats}
        onChange={handleChange}
      />

      <button type="submit" >Create A New Train</button>
    </form>
  </div>

  )
    }

export default CreateTrain



