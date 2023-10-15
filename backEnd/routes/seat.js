
import express from "express";
import { verifyAdmin, verifyToken ,verifyUser } from "../utils/verifyToken.js";

import { createSeat, updateSeat, deleteSeat, getSeat, getSeats } from "../controllers/seat.js";
const router = express.Router();


// creat 
router.post("/:trainid",verifyAdmin,createSeat);
// update
router.put("/:id",verifyAdmin, updateSeat)
// delete
router.delete("/:id/:trainid", verifyAdmin , deleteSeat);
// get
router.get("/:id", getSeat);
// getall
router.get("/", getSeats);

export default router;


