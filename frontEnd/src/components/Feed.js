import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Feed.css";
import Button from "./Button";
import BookSeat from "./BookSeat";
import { useNavigate } from "react-router-dom";


const Feed = () => {
  const { data, loading, error } = useFetch("/addTrain");

  console.log(data);
  const navigate = useNavigate();

  const [trains, setTrains] = useState([]);

  const [openModal, setOpenModal] = useState(false);

  const { user } = useContext(AuthContext);

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    // You can set the existing data to the trains state directly
    setTrains(data);
  }, [data]);

  return (
    <>
      {loading ? (
        "loading please wait"
      ) : (
        <>
          <div className="feed-page">
            <h1>Train Feed</h1>

            <table className="train-table">
              <thead>
                <tr>
                  <th>Train Name</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {trains.map((train) => (
                  <tr key={train.id}>
                    <td>{train.name}</td>
                    <td>{train.from}</td>
                    <td>{train.to}</td>
                    <td>{train.price}</td>
                   

                    <td>
                      <button onClick={handleClick}>Book Now</button>
                      {/* link={"/bookseat"}  {train.seats} */}
                      {openModal && <BookSeat totalSeat={train.availableSeats} trainId={train.seats} />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <BookSeat/> */}
          </div>
        </>
      )}
     {/* {openModal && <BookSeat setOpen={setOpenModal} trainId={train.seats} />} */}
    </>
  );
};

export default Feed;
