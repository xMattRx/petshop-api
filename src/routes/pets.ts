import { Router } from "express";
import { createPetHandler, deletePetHandler, deleteUnvaccinatedPetsHandler, getPetByIdHandler, listPetsHandler, updatePetHandler, updateVaccinationStatusHandler, vaccinatePetHandler } from "../controllers/pet.controler";

const router = Router();

router.get('/', listPetsHandler);
router.get('/:id', getPetByIdHandler);
router.post('/', createPetHandler);
router.post('/:id/vaccinate', vaccinatePetHandler);
router.put('/:id', updatePetHandler);
router.put('/:id/vaccination', updateVaccinationStatusHandler);
router.delete('/:id', deletePetHandler);
router.delete('/unvaccinated/all', deleteUnvaccinatedPetsHandler);

export default router;
