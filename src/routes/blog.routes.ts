import express from 'express';
import { createBlog, getBlogs } from '../controllers/blog.controller';
import { protect, adminOnly } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/', protect, adminOnly, createBlog);
router.get('/', getBlogs);

export default router;
