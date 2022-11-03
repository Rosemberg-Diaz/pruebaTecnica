import { Router } from "express";
import { 
    createUsers, 
    getUsers,
    updateUsers,
    deleteUsers,
    findById 
} from "../controllers/user.controller.js";
import {authenticateToken} from "../middleware/authorization.js"

const router = Router();

router.get('/users', authenticateToken, getUsers)
router.post('/users', createUsers)
router.put('/users/:id', updateUsers)
router.delete('/users/:id', deleteUsers)
router.get('/users/:id',findById)

export default router