import users from '../users.js'
export const getAllUser = (req, res, next) => {
    res.json(users);
}

export const signUp = (req, res, next) => {
    const {user} = req.body;
    users.push(user)
    res.json(user);
}

export const signIn = (req, res, next) => {
    const {user} = req.body;
    let index = users.findIndex(u => u.pass == user.pass && u.name == user.name)
    if(index == -1){
        res.json("USER NOT EXIST")
    }
    else{
        res.json("CONNECED SUCCESS")
    }
}