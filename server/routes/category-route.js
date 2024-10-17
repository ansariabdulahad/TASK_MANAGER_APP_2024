import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { createCategory, deleteCategory, editCategory, getAllCategory } from '../controllers/category-controller.js';

const router = Router();

router.post('/create', authMiddleware, createCategory);
router.get('/', authMiddleware, getAllCategory);
router.put('/:id', authMiddleware, editCategory);
router.delete('/:id', authMiddleware, deleteCategory);

export default router;