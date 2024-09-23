import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import blogRoutes from './routes/blog.routes';
import categoryRoutes from './routes/category.routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, '../views'));

// Serve static files (e.g., CSS) from the public folder
app.use(express.static('public'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/blogs', blogRoutes);
app.use('/categories', categoryRoutes);
app.get('/', (req, res) => {
    // Render a homepage or redirect to the blogs list
    res.redirect('/blogs');  // or render a homepage like res.render('home')
  });
  
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
