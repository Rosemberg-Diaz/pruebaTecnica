import { Router } from "express";
import { 
    createPeople, 
    getPeople,
    updatePeople,
    deletePeople,
    findById 
} from "../controllers/people.controller.js";

const router = Router();

router.get('/people', getPeople)
router.post('/people', createPeople)
router.put('/people/:id', updatePeople)
router.delete('/people/:id', deletePeople)
router.get('/people/:id',findById)

export default router