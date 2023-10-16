import React ,{useState, useEffect} from 'react'
import useFetch from "../hooks/useFetch";
import axios from "axios";
import "./DeleteTrain.css"
const DeleteTrain = () => {
  const { data, loading, error } = useFetch("/addTrain");
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // You can set the existing data to the trains state directly
    setTrains(data);
  }, [data]);

 const handleDelete = async(id) =>{
   try{
    await axios.delete(`/addTrain/${id}`)
    setTrains( trains.filter((item) => item._id !== id));
   }
   catch(err){

   }
 }

console.log(data)

  return (
    <div>
      <h1>Get the details of all trains</h1>
       <table className="train-table">
              <thead>
                <tr>
         
                  <th>Train Name</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Price</th>
                  <th>Total Seats</th>
                  <th>Action</th>
                  
                </tr>
              </thead>
              <tbody>
                {trains.map((train) => (
                  <tr key={train._id}>
                   
                    <td>{train.name}</td>
                    <td>{train.from}</td>
                    <td>{train.to}</td>
                    <td>{train.price}</td>
                    <td>{train.availableSeats}</td>
                    {/* <td>{train._id}</td> */}

                    <td>
                      <button
                        onClick={() =>
                          handleDelete(train._id)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
    </div>
  )
}

export default DeleteTrain