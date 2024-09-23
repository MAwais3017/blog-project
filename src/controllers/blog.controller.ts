import { Request, Response } from 'express';
import pool from '../utils/db';

// Create a new blog
export const createBlog = async (req: Request, res: Response) => {
  const { title, content, category_id, userId } = req.body; // Extracting from body

  // Validate required fields
  if (!title || !content || !category_id || !userId) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Execute the SQL query
    await pool.execute(
      'INSERT INTO blogs (title, content, category_id, created_by) VALUES (?, ?, ?, ?)',
      [title, content, category_id, userId]
    );
    res.status(201).json({ message: 'Blog created' });
  } catch (error: unknown) {
    // Improved error logging
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      res.status(500).json({ message: 'Error creating blog', error: error.message });
    } else {
      console.error('Unexpected error:', error);
      res.status(500).json({ message: 'Error creating blog' });
    }
  }
};

// Get all published blogs
export const getBlogs = async (req: Request, res: Response) => {
  try {
    const [blogs] = await pool.execute('SELECT * FROM blogs WHERE published = 1');
    res.json(blogs);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error fetching blogs:', error.message);
      res.status(500).json({ message: 'Error fetching blogs', error: error.message });
    } else {
      console.error('Unexpected error:', error);
      res.status(500).json({ message: 'Error fetching blogs' });
    }
  }
};
