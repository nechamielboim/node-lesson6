import { getAllUser, signIn, signUp, updateUser } from '../controllers/user.controller.js';
import express from 'express';
import { checkAdmin, checkAuth } from '../middlewares/auth.middleWare.js';

const router = express.Router()

router.get('/',checkAuth ,checkAdmin ,getAllUser)

router.post('/sign-up',signUp)

router.post('/sign-in',signIn)

router.put('/:id' , checkAuth, updateUser)

export default router


