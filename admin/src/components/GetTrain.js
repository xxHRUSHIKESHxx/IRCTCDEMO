import React ,{useState, useEffect} from 'react'
import useFetch from "../hooks/useFetch";
import "./GetTrain.css"
const GetTrain = () => {
  const { data, loading, error } = useFetch("/addTrain");
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // You can set the existing data to the trains state directly
    setTrains(data);
  }, [data]);

console.log(data)

  return (
    <div>
      <h1>Get the details of all trains</h1>
       <table className="train-table">
              <thead>
                <tr>
                <th>Train Id</th>
                  <th>Train Name</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Price</th>
                  <th>Total Seats</th>
                  
                </tr>
              </thead>
              <tbody>
                {trains.map((train) => (
                  <tr key={train._id}>
                    <td>{train._id}</td>
                    <td>{train.name}</td>
                    <td>{train.from}</td>
                    <td>{train.to}</td>
                    <td>{train.price}</td>
                    <td>{train.availableSeats}</td>
                    {/* <td>{train._id}</td> */}

                    <td>
                      {/* <button
                        onClick={() =>
                          handleClick(train._id, train.availableSeats )
                        }
                      >
                        Book Now
                      </button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
    </div>
  )
}

export default GetTrain