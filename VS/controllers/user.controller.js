import { Users } from "../models/Users.js"

export const getUsers = async (req, res) => {
    try{
        const user = await Users.findAll()
        res.json (user)
    }catch (error){
        return res.send({message: error.message});
    }
}

export const createUsers = async (req, res) => {
    const {username, email, password} = req.body
    try{
        const newUser = await Users.create({
            username,
            email,
            password
        })
        res.json(newUser)
    }catch (error){
        return res.send({message: error.message});
    }
}

export const updateUsers = async (req, res) => {
    try{
        const {id} = req.params;
        const {username, email, password} = req.body
        
        const user = await Users.findByPk(id)
        user.username = username
        user.email = email
        user.password = password

        await user.save()

        console.log('user',user)
        res.json(user)
    }catch(error){
        return res.send({message: error.message});
    }
}

export const deleteUsers = async (req, res) => {
    try{
        const {id} = req.params;
        await Users.destroy({
            where:{
                id,
            }
        });
        res.sendStatus(204)
    }catch (error){
        return res.send({message: error.message});
    } 
}

export const findById = async (req, res) => {
    const {id} = req.params;
    const user = await Users.findByPk(id)
    res.json(user)
}