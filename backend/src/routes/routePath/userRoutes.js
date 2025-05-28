import express from 'express';
import { UserController } from '../../controllers/userController.js';
import { UserVerifyToken, isAdmin } from '../../services/middlewares/authMiddleware.js';

const router = express.Router();

// Qualquer usuário autenticado
router.get('/users', UserVerifyToken, UserController.listUsers);

// Apenas administradores
router.post('/users', UserVerifyToken, isAdmin, UserController.createUser);
router.delete('/users/:id', UserVerifyToken, isAdmin, UserController.deleteUser);

// Qualquer um autenticado pode consultar seu próprio dado
router.get('/users/:id', UserVerifyToken, UserController.getOneUser);
router.put('/users/:id', UserVerifyToken, UserController.updateUser);

export default router;
