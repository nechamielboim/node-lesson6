import users from '../users.js'
import express from 'express';

const router = express.Router()

router.get('/',(req, res) => {
    res.json(users);
})

router.post('/sign-up',(req, res) => {
    const {user} = req.body;
    users.push(user)
    res.json(user);
})

router.post('/sign-in',(req, res) => {
    const {user} = req.body;
    let index = users.findIndex(u => u.pass == user.pass && u.name == user.name)
    if(index == -1){
        res.json("USER NOT EXIST")
    }
    else{
        res.json("CONNECED SUCCESS")
    }
})

export default router


