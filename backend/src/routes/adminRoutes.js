import express from "express";
import { authenticate, isAdmin } from "../middlewares/authMiddleware.js";
import { listAdmins, createAdmin } from "../controllers/adminController.js";

const router = express.Router();

router.get("/", authenticate, isAdmin, listAdmins);
router.post("/", authenticate, isAdmin, createAdmin);

export default router;
