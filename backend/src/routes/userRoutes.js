import express from "express";
import { authenticate } from "../middlewares/authMiddleware.js";
import { listUsers, updateUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", authenticate, listUsers);
router.put("/", authenticate, updateUser);
router.delete("/", authenticate, deleteUser);

export default router;
