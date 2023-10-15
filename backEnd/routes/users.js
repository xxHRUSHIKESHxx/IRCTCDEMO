import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/users.js";
import { verifyAdmin, verifyToken ,verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res) => {
//   res.send("hello user you are logged in");
// });
// router.get("/checkuser/:id", verifyUser, (req, res) => {
//   res.send("hello user you are logged in and you can delete your account");
// });
// router.get("/checkAdmin/:id", verifyToken, (req, res) => {
//   res.send("hello admin you are logged in and you can delete all accounts");
// });

// update
router.put("/:id",verifyUser, updateUser);
// delete
router.delete("/:id",verifyUser, deleteUser);
// get
router.get("/:id",verifyUser, getUser);
// getall
router.get("/",verifyAdmin, getUsers);

export default router;
