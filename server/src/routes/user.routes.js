import express from "express";
import { allUsers, registerUser } from "../controllers/user.controller";
import { protect } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers);

router.route("/login").post(authUser);

export default router;
