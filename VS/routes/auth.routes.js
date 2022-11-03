import { Router } from "express";
import { 
    authUser,
    refreshTokenAuth,
    deleteAuth
 } from "../controllers/auth.controller.js";

const router = Router();

router.post('/login', authUser)
router.get('/refresh_token', refreshTokenAuth)
router.delete('/refresh_token', deleteAuth)

export default router;