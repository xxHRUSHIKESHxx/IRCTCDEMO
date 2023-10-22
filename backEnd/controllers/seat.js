import Seat from "../models/Seat.js";
import Trains from "../models/AddTrains.js";
import {createError} from "../utils/error.js";



// create seat 
export const createSeat = async (req , res , next) => {

 const trainId = req.params.trainid;
 const newSeat = new Seat(req.body);

try{

    const savedSeat = await newSeat.save();
    try{
      await  Trains.findByIdAndUpdate(trainId,{$push :{seats : savedSeat._id }})
      
    }
    catch(err){
    next(err);
    }
    res.status(200).json(savedSeat);
}
catch(err){
    next(err);
}

}
// update
export const  updateSeat = async(req , res , next) =>{

    try {
        const updatedSeat = await Seat.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedSeat);
      } catch (err) {
        next(err);
      }


}

// delete

export const  deleteSeat = async(req , res , next) =>{
    const trainId = req.params.trainid;
    try {
        await Seat.findByIdAndDelete( req.params.id);
        try{
            await  Trains.findByIdAndUpdate(trainId,{$pull :{seats :  req.params.id }})
            
          }
          catch(err){
          next(err);
          }
        res.status(200).json("seat has been deleted");
      } catch (err) {
        next(err);
      }


}

// get
export const  getSeat = async(req , res , next) =>{

    try {
        const seat =  await Seat.findById( req.params.id);
         res.status(200).json(seat);
       } catch (err) {
        next(err);
       }


}

// get all
export const  getSeats = async(req , res , next) =>{

    try {
        const seats =  await Seat.find( req.params.id);
         res.status(200).json(seats);
       } catch (err) {
        next(err);
       }


}



export const updateAvailability = async (req, res, next) => {
  try {
    await Seat.updateOne(
      
      { "seatNumber._id": req.params.id },
      {
        $set : {
          "seatNumber.$.unavailable":true
        }
      }
    );
    res.status(200).json("Room status has been updated.");
  } catch (err) {
    next(err);
  }
};