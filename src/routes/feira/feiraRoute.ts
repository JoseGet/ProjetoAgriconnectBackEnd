import express from 'express';
import { 
    getFeiras,
    getFeiraById, 
    createFeira, 
    updateFeira, 
    deleteFeira 
} from '../../controllers/feira';

const router = express.Router();


/**
 * @swagger
 * tags:
 *   name: Feiras
 *   description: Rotas para gerenciar feiras
 */

/**
 * @swagger
 * /feiras:
 *   get:
 *     summary: Lista todos as feiras
 *     tags: [Feiras]
 *     responses:
 *       200:
 *         description: Lista de feiras
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_feira:
 *                     type: int
 *                     example: 1
 *                   nome:
 *                     type: string
 *                     example: 'Feira da Laranja'
 *                   endereco:
 *                     type: string
 *                     example: 'Rua Laranjeiras'
 */
router.get('/', getFeiras);


/**
 * @swagger
 * /feiras/{id}:
 *   get:
 *     summary: Busca uma feira pelo Id
 *     tags: [Feiras]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: int
 *         description: Id das feiras
 *     responses:
 *       200:
 *         description: Feira encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_feira:
 *                   type: int
 *                   example: 1
 *                 nome:
 *                   type: string
 *                   example: 'Feira da Laranja'
 *                 endereco:
 *                   type: string
 *                   example: 'Rua Laranjeiras'
 *       404:
 *         description: Feira não encontrada
 */
router.get('/:id', getFeiraById);


/**
 * @swagger
 * /feiras:
 *   post:
 *     summary: Cria uma nova Feira
 *     tags: [Feiras]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - nome
 *               - endereco
 *             properties:
 *               id_feira:
 *                 type: int
 *                 example: 1
 *               nome:
 *                 type: string
 *                 example: 'Alexander Nascimento'
 *               email:
 *                 type: string
 *                 example: 'alexander@email.com'
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post('/', createFeira);


/**
 * @swagger
 * /feiras/{id}:
 *   put:
 *     summary: Atualiza um cliente pelo CPF
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: cpf
 *         required: true
 *         schema:
 *           type: string
 *         description: CPF do cliente a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: 'Alexander Atualizado'
 *               email:
 *                 type: string
 *                 example: 'alexanderatualizado@email.com'
 *     responses:
 *       200:
 *         description: Cliente atualizado com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Cliente não encontrado
 */
router.put('/:id', updateFeira);


/**
 * @swagger
 * /feiras/{id}:
 *   delete:
 *     summary: Deleta uam feira pelo Id
 *     tags: [Feiras]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Id da feira a ser deletado
 *     responses:
 *       204:
 *         description: Feira deletado com sucesso
 *       404:
 *         description: Feira não encontrado
 */
router.delete('/:id', deleteFeira);

export default router;
