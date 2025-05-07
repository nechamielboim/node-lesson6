import express from 'express';
import { addBook, deleteBook, getAllBooks, getBookById, updateBook } from '../controllers/book.controller.js';

const router = express.Router()

router.get('/',getAllBooks)

router.get('/:id',getBookById)
    
router.post('/',addBook)
 

router.put('/:id',updateBook)

router.delete('/:id',deleteBook)

export default router
  





