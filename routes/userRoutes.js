import express from "express";
import { addUser, deleteData, getSingleData, getUser, updateDate } from "../controllers/userController.js";

const router = express.Router();

router.route("/adduser").post(addUser)
router.route("/getuser").get(getUser)
router.route("/delete/:id").delete(deleteData)
router.route("/singleData/:_id").get(getSingleData)
router.route("/updateData/:_id").put(updateDate)

export default router;