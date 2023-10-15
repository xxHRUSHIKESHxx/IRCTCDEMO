import Trains from "../models/AddTrains.js";
import Seat from "../models/Seat.js";
// create
export const  createTrain = async(req , res , next) =>{

    const newTrain = new Trains(req.body);

    try {
      const savedTrain = await newTrain.save();
      res.status(200).json(savedTrain);
      res.send("hello this is addtrains page");
    } catch (err) {
     next(err);
    }


}

// update
export const  updateTrain = async(req , res , next) =>{

    try {
        const updatedTrain = await Trains.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedTrain);
      } catch (err) {
        next(err);
      }


}

// delete

export const  deleteTrain = async(req , res , next) =>{

    try {
        await Trains.findByIdAndDelete( req.params.id);
        res.status(200).json("hotel has been deleted");
      } catch (err) {
        next(err);
      }


}

// get
export const  getTrain = async(req , res , next) =>{

    try {
        const train =  await Trains.findById( req.params.id);
         res.status(200).json(train);
       } catch (err) {
        next(err);
       }


}

// get all
export const  getTrains = async(req , res , next) =>{

    try {
        const trains =  await Trains.find( req.params.id);
         res.status(200).json(trains);
       } catch (err) {
        next(err);
       }

      

}

// get seatby train

export const getTrainSeat = async (req , res , next ) =>{
  try{
    const trains = await Trains.findById(req.params.id);
    const list = await Promise.all(trains.seats.map((seat) =>{
      return Seat.findById(seat);
    }))
    res.status(200).json(list);
  }
  catch(err){
    next(err);
  }
}