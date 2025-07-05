import { Request, Response } from 'express';
import { pets } from '../data/pets';
import { Pet } from '../types/Pet';

// POST /pets
export function createPetHandler(req: Request, res: Response): void {
  const { name, species, breed, vaccinated } = req.body;

  const newPet: Pet = {
    id: pets.length + 1,
    name,
    species,
    breed,
    vaccinated: !!vaccinated,
  };

  pets.push(newPet);
  res.status(201).json(newPet);
}

// POST /pets/:id/vaccinate
export function vaccinatePetHandler(req: Request, res: Response): void {
  const id = Number(req.params.id);
  const pet = pets.find(p => p.id === id);

  if (!pet) {
    res.status(404).json({ message: 'Pet não encontrado' });
    return;
  }

  pet.vaccinated = true;
  res.json({ message: 'Pet vacinado com sucesso', pet });
}

// GET /pets
export function listPetsHandler(req: Request, res: Response): void {
  res.status(200).json(pets);
}

// GET /pets/:id
export function getPetByIdHandler(req: Request, res: Response): void {
  const id = Number(req.params.id);
  const pet = pets.find(p => p.id === id);

  if (!pet) {
    res.status(404).json({ message: 'Pet não encontrado' });
    return;
  }

  res.json(pet);
}

// PUT /pets/:id
export function updatePetHandler(req: Request, res: Response): void {
  const id = Number(req.params.id);
  const { name, breed } = req.body;

  const pet = pets.find(p => p.id === id);
  if (!pet) {
    res.status(404).json({ message: 'Pet não encontrado' });
    return;
  }

  if (name) pet.name = name;
  if (breed) pet.breed = breed;

  res.json(pet);
}

// PUT /pets/:id/vaccination
export function updateVaccinationStatusHandler(req: Request, res: Response): void {
  const id = Number(req.params.id);
  const { vaccinated } = req.body;

  const pet = pets.find(p => p.id === id);
  if (!pet) {
    res.status(404).json({ message: 'Pet não encontrado' });
    return;
  }

  pet.vaccinated = !!vaccinated;
  res.json(pet);
}
