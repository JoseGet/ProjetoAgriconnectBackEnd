import express from 'express';
import {
  getVendedores,
  getVendedorById,
  createVendedor,
  updateVendedor,
  deleteVendedor,
} from '../../controllers/vendedor';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Vendedores
 *   description: Operações relacionadas a vendedores
 */

/**
 * @swagger
 * /vendedores:
 *   get:
 *     summary: Lista todos os vendedores
 *     tags: [Vendedores]
 *     responses:
 *       200:
 *         description: Lista de vendedores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vendedor'
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/', getVendedores);

/**
 * @swagger
 * /vendedores/{id}:
 *   get:
 *     summary: Busca vendedor pelo ID
 *     tags: [Vendedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID do vendedor
 *     responses:
 *       200:
 *         description: Vendedor encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vendedor'
 *       404:
 *         description: Vendedor não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get('/:id', getVendedorById);

/**
 * @swagger
 * /vendedores/cadastro:
 *   post:
 *     summary: Cria um novo vendedor
 *     tags: [Vendedores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VendedorInput'
 *     responses:
 *       201:
 *         description: Vendedor criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vendedor'
 *       500:
 *         description: Erro interno do servidor
 */
router.post('/cadastro', createVendedor);

/**
 * @swagger
 * /vendedores/{id}:
 *   put:
 *     summary: Atualiza um vendedor pelo ID
 *     tags: [Vendedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID do vendedor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VendedorInput'
 *     responses:
 *       200:
 *         description: Vendedor atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vendedor'
 *       404:
 *         description: Vendedor não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put('/:id', updateVendedor);

/**
 * @swagger
 * /vendedores/{id}:
 *   delete:
 *     summary: Deleta um vendedor pelo ID
 *     tags: [Vendedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID do vendedor
 *     responses:
 *       200:
 *         description: Vendedor deletado com sucesso
 *       404:
 *         description: Vendedor não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete('/:id', deleteVendedor);

export default router;
