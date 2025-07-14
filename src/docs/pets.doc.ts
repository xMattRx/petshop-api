/**
 * @swagger
 * tags:
 *   name: Pets
 *   description: Operações relacionadas a pets
 *
 * components:
 *   schemas:
 *     Pet:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Rex
 *         species:
 *           type: string
 *           example: cachorro
 *         breed:
 *           type: string
 *           example: labrador
 *         vaccinated:
 *           type: boolean
 *           example: true
 *
 * /pets:
 *   get:
 *     summary: Lista todos os pets
 *     tags: [Pets]
 *     responses:
 *       200:
 *         description: Lista de pets retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pet'
 *
 *   post:
 *     summary: Cria um novo pet
 *     tags: [Pets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pet'
 *     responses:
 *       201:
 *         description: Pet criado com sucesso
 *
 * /pets/{id}:
 *   get:
 *     summary: Busca um pet pelo ID
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pet encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pet'
 *       404:
 *         description: Pet não encontrado
 *
 *   put:
 *     summary: Atualiza um pet pelo ID
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pet'
 *     responses:
 *       200:
 *         description: Pet atualizado com sucesso
 *       404:
 *         description: Pet não encontrado
 *
 *   delete:
 *     summary: Remove um pet pelo ID
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Pet removido
 *       404:
 *         description: Pet não encontrado
 *
 * /pets/{id}/vaccinate:
 *   post:
 *     summary: Marca um pet como vacinado
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pet vacinado com sucesso
 *
 * /pets/{id}/vaccination:
 *   put:
 *     summary: Atualiza status de vacinação
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               vaccinated:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Status atualizado com sucesso
 *
 * /pets/unvaccinated/all:
 *   delete:
 *     summary: Remove todos os pets não vacinados
 *     tags: [Pets]
 *     responses:
 *       204:
 *         description: Pets não vacinados removidos com sucesso
 */
export {};
