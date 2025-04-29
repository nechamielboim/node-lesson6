import express from 'express';
import booksRoutes from './routes/book.route.js';
import userRoutes from './routes/user.route.js'

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json('HELLO TO YOU');
});

app.use('/books', booksRoutes);

app.use('/users',userRoutes)

app.listen(5000, () => {
    console.log('השרת רץ על הפורט 5000');
});
