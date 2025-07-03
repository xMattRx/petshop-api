import { Router } from "express";
import { createPetHandler, getPetByIdHandler, listPetsHandler, vaccinatePetHandler } from "../controllers/pet.controler";


const router = Router();

router.post('/', createPetHandler);
router.post('/:id/vaccinate', vaccinatePetHandler);
router.get('/', listPetsHandler);
router.get('/:id', getPetByIdHandler);

export default router;
