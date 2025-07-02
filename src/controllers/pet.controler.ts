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
