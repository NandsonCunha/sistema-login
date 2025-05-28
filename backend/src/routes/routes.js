import express from "express";
import routerUser from './routePath/userRoutes.js'

const router = express.Router();

router.use('/user', routerUser)


export default router;