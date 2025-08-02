import criarPagamento from "../../controllers/mercadoPago";
import express from "express";

const router = express.Router();
router.post("/", criarPagamento);

export default router;
