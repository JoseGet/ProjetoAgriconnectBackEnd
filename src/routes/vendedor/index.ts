import express from 'express';
import {
  getVendedores,
  getVendedorById,
  createVendedor,
  updateVendedor,
  deleteVendedor,
} from '../../controllers/vendedor';

const router = express.Router();

router.get('/', getVendedores);
router.get('/:id', getVendedorById);
router.post('/cadastro', createVendedor);
router.put('/:id', updateVendedor);
router.delete('/:id', deleteVendedor); 
export default router;
