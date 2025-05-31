import criarPagamento from "../../controllers/mercadoPago";
import express from "express";

const router = express.Router();

/**
 * @swagger
 * /api/mercado-pago:
 *   post:
 *     summary: Cria uma preferência de pagamento no Mercado Pago
 *     tags: [Pagamento]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - testeId
 *               - userEmail
 *             properties:
 *               testeId:
 *                 type: string
 *                 example: "123456"
 *               userEmail:
 *                 type: string
 *                 example: "usuario@email.com"
 *     responses:
 *       200:
 *         description: Preferência criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 preferenceId:
 *                   type: string
 *                   example: "123456789"
 *                 initPoint:
 *                   type: string
 *                   example: "https://www.mercadopago.com.br/init_point"
 *       500:
 *         description: Erro ao criar a preferência
 */
router.post("/", criarPagamento);

export default router;
