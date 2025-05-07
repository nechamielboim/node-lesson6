import { getAllUser, signIn, signUp } from '../controllers/user.controller.js';
import express from 'express';

const router = express.Router()

router.get('/',getAllUser)

router.post('/sign-up',signUp)

router.post('/sign-in',signIn)

export default router


