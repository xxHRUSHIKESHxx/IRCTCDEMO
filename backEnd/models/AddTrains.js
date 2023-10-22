import mongoose from "mongoose";
const { Schema } = mongoose;

const trainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String, 
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  seats: {
    type: [],
  },
  availableSeats:{
    type: Number,
    required: true,
  }
  
},
{ timestaps: true }
);

export default mongoose.model("Trains" , trainSchema);
