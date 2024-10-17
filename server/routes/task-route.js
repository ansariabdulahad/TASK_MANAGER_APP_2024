import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { createTask, deleteTask, editTask, getAllTasks } from '../controllers/task-controller.js';

const router = Router();

router.post('/create', authMiddleware, createTask);
router.get('/', authMiddleware, getAllTasks);
router.put('/:id', authMiddleware, editTask);
router.delete('/:id', authMiddleware, deleteTask);

export default router;