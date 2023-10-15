import mongoose from "mongoose";
const { Schema } = mongoose;

const seatSchema = new mongoose.Schema(
  {
    trainName: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    seatNumber: [{ number : Number, unavailable: { type: Boolean, default: false } }],
  },
  { timestaps: true }
);

export default mongoose.model("Seat", seatSchema);
