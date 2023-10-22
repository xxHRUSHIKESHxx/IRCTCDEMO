import React ,{useState} from 'react';
import "./updateTrain.css";
import axios from 'axios';


const UpdateTrain = () => {
  const [formData, setFormData] = useState({
    id:'',
    name: '',
    from: '',
    to: '',
    price: '',
    seats: [],
    availableSeats:0,
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handelupdateTrain = async() =>{
    try{
     await axios.put(`/addTrain/${formData.id}` , formData);
     setFormData({
      id:'',
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

 return (
    <div className="form-container">
      <h2>Add a New Train</h2>
      <form className="train-form">
      <label>
          Train Id:
          <input type="text" name="id" value={formData.id} onChange={handleChange} />
        </label>
         <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="text" name="price" value={formData.price} onChange={handleChange} />
        </label>
       
        <label>
          From:
          <input type="text" name="from" value={formData.from} onChange={handleChange} />
        </label>
  
        <label>
         To: 
          <input type="text" name="to" value={formData.to} onChange={handleChange} />
        </label>
        
       {/* <label>
           Seats:
          <input type="text" name="seats" value={train.seats} onChange={handleChange} />
        </label> */}
  
        <label>
          Available Seats:
          <input type="text" name="availableSeats" value={formData.availableSeats} onChange={handleChange} />
        </label>
  
        <button type="submit" className="submit-button" onClick={handelupdateTrain} >
          Add Train
        </button>
      </form>
    </div>
  );
  
}

export default UpdateTrain

