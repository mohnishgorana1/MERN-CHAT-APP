import express from "express";
import { allUsers, authUser, registerUser } from "../controllers/user.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers);

router.route("/login").post(authUser);

export default router;
