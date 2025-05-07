import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import booksRoutes from './routes/book.route.js';
import userRoutes from './routes/user.route.js'
import { addCurrentDate, printDate } from './middlewares/addDate.middelware.js';
import { errorHandler, notFound } from './myMiddleware/err.middleware.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();

connectDB() 

const app = express();

app.use(cors());

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
  
app.use(addCurrentDate)

app.use(printDate)

app.get('/', (req, res) => {
    res.json('HELLO TO YOU');
});

app.use('/books', booksRoutes);

app.use('/users',userRoutes)

app.use(notFound)

app.use(errorHandler)

app.listen(5000, () => {
    console.log('השרת רץ על הפורט 5000');
});
