import React ,{useState} from "react";
import './Feed.css';
import GetTrain from "./GetTrain";
import CreateTrain from "./CreateTrain";
import UpdateTrain from "./UpdateTrain";
import DeleteTrain from "./DeleteTrain";
const Feed = () => {
  // const [open, setOpen] = useState(false);
  const [openGetModal, setOpenGetModal] = useState(false);
  const [openCreatModal, setOpenCreatModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleGetTrainDetails = () => {
    setOpenGetModal(true);
    setOpenCreatModal(false);
    setOpenUpdateModal(false);
    setOpenDeleteModal(false);
  };
  const handleCreateTrain = () => {
    setOpenGetModal(false);
    setOpenCreatModal(true);
    setOpenUpdateModal(false);
    setOpenDeleteModal(false);
  };
  const handleUpdateTrain = () => {
    setOpenGetModal(false);
    setOpenCreatModal(false);
    setOpenUpdateModal(true);
    setOpenDeleteModal(false);
  };
  const handleDeleteTrain = () => {
    setOpenGetModal(false);
    setOpenCreatModal(false);
    setOpenUpdateModal(false);
    setOpenDeleteModal(true);
  };


  return (
    <div className="feed">
      <h1>Manage Trains</h1>

      {/*  ---------- get all train details -------------- */}
     <div className="button-container">
      <button onClick={handleGetTrainDetails} className="Button">Get all Trains</button>

      {/*------------- create train ----------------- */}
      <button onClick={handleCreateTrain}  className="Button">Create a New Train</button>

      {/* -------------update Train------------------- */}
      <button onClick={handleUpdateTrain}   className="Button">Update Train</button>

      {/* --------------delete Train------------------- */}
      <button onClick={handleDeleteTrain}  className="Button">Delete Train</button>
      </div>
      {openGetModal && (
        
        <GetTrain/>
      )}
            {openCreatModal && (
       <CreateTrain/>
      )}
            {openUpdateModal && (
        <UpdateTrain/>
      )}
            {openDeleteModal && (
        <DeleteTrain/>
      )}
    </div>
  );
};

export default Feed;
