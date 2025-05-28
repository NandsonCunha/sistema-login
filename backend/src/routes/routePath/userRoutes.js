import express from 'express';
import { UserController } from '../../controllers/userController.js';
import { UserVerifyToken, isAdmin } from '../../services/middlewares/authMiddleware.js';
import UserAuthentication from "../../controllers/authController.js"

const router = express.Router();

router.get('/getAll', UserVerifyToken, UserController.listUsers);

router.post('/create', UserVerifyToken, isAdmin, UserController.createUser);
router.delete('/delete/:id', UserVerifyToken, isAdmin, UserController.deleteUser);

router.get('/getOne/:id', UserVerifyToken, UserController.getOneUser);
router.put('/update/:id', UserVerifyToken, UserController.updateUser);

router.post("/login", UserAuthentication)

export default router;
