import { Request, Response } from 'express';
import pool from '../utils/db';

export const createCategory = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    await pool.execute('INSERT INTO categories (name) VALUES (?)', [name]);
    res.status(201).json({ message: 'Category created' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating category' });
  }
};
