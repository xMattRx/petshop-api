/**
 * @swagger
 * tags:
 *   name: Pets
 *   description: Operações relacionadas a pets

 * /pets:
 *   get:
 *     summary: Lista todos os pets
 *     tags: [Pets]
 *     responses:
 *       200:
 *         description: Lista de pets retornada com sucesso

 *   post:
 *     summary: Cria um novo pet
 *     tags: [Pets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *               age:
 *                 type: number
 *     responses:
 *       201:
 *         description: Pet criado com sucesso

 * /pets/{id}:
 *   get:
 *     summary: Busca um pet pelo ID
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pet encontrado
 *       404:
 *         description: Pet não encontrado

 *   put:
 *     summary: Atualiza um pet pelo ID
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: number
 *               type:
 *                 type: string
 *     responses:
 *       200:
 *         description: Pet atualizado com sucesso
 *       404:
 *         description: Pet não encontrado

 *   delete:
 *     summary: Remove um pet pelo ID
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Pet removido
 *       404:
 *         description: Pet não encontrado

 * /pets/{id}/vaccinate:
 *   post:
 *     summary: Marca um pet como vacinado
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pet vacinado com sucesso

 * /pets/{id}/vaccination:
 *   put:
 *     summary: Atualiza status de vacinação
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Status atualizado

 * /pets/unvaccinated/all:
 *   delete:
 *     summary: Remove todos os pets não vacinados
 *     tags: [Pets]
 *     responses:
 *       204:
 *         description: Pets removidos
 */
export {};
