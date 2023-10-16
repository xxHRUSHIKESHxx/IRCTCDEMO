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

  const navigate = useNavigate();

  // var xyz ;
  const [trains, setTrains] = useState([]);
  const [trainID, setTrainID] = useState(null);

  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [totalSeats, setTotalSeats] = useState();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    // You can set the existing data to the trains state directly
    setTrains(data);
  }, [data]);
  const handleClick = (trainid, noOfSeats) => {
    if (user) {
      setTrainID(trainid);
      setOpenModal(true);
      setTotalSeats(noOfSeats);
    } else {
      navigate("/register");
    }
  };
  const hello = trainID;
  const availableSeats = totalSeats;

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
                  <tr key={train._id}>
                    <td>{train.name}</td>
                    <td>{train.from}</td>
                    <td>{train.to}</td>
                    <td>{train.price}</td>
                    {/* <td>{train.availableSeats}</td> */}
                    {/* <td>{train._id}</td> */}

                    <td>
                      <button
                        onClick={() =>
                          handleClick(train._id, train.availableSeats )
                        }
                      >
                        Book Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <BookSeat/> */}
          </div>
        </>
      )}
      {openModal && (
        <BookSeat setOpen={setOpenModal} trainId={hello} seatNo={totalSeats} />
      )}
    </>
  );
};

export default Feed;

{
  /* { setTrainData(train.id) && setTotalSeat(train.seats) } */
}
{
  /* link={"/bookseat"}  {train.seats} */
}
{
  /* { xyz = train.seats } */
}
