import express from 'express';
import { createCategory } from '../controllers/category.controller';
import { protect, adminOnly } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/', protect, adminOnly, createCategory);

export default router;
