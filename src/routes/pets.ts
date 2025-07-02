import { Router } from "express";
import { createPetHandler, vaccinatePetHandler } from "../controllers/pet.controler";


const router = Router();

router.post('/', createPetHandler);
router.post('/:id/vaccinate', vaccinatePetHandler);

export default router;
