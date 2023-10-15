import express from "express";
import { verifyAdmin, verifyToken ,verifyUser } from "../utils/verifyToken.js";

import { createTrain, updateTrain, deleteTrain, getTrains, getTrain ,getTrainSeat } from "../controllers/addTrain.js";
const router = express.Router();


// creat 
router.post("/",verifyAdmin,createTrain);
// update
router.put("/:id",verifyAdmin, updateTrain)
// delete
router.delete("/:id", verifyAdmin , deleteTrain);
// get
router.get("/:id", getTrain);
// getall
router.get("/", getTrains);

router.get("/seat/:id",getTrainSeat);

export default router;
