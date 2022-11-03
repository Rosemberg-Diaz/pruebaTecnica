import { People } from "../models/People.js"

export const getPeople = async (req, res) => {
    try{
        const people = await People.findAll()
        res.json (people)
    }catch (error){
        return res.send({message: error.message});
    }
}

export const createPeople = async (req, res) => {
    const {firstName, lastName, dateOfBirth, sex, email, telephone, cellphone, city} = req.body
    try{
        const newPeople = await People.create({
            firstName,
            lastName,
            dateOfBirth,
            sex,
            email,
            telephone,
            cellphone,
            city
        })
        res.json(newPeople)
    }catch (error){
        return res.send({message: error.message});
    }
}

export const updatePeople = async (req, res) => {
    try{
        const {id} = req.params;
        const {firstName, lastName, dateOfBirth, sex, email, telephone, cellphone, city} = req.body
        
        const people = await People.findByPk(id)
        people.firstName = firstName
        people.lastName = lastName
        people.dateOfBirth = dateOfBirth
        people.sex = sex
        people.email = email
        people.telephone = telephone
        people.cellphone = cellphone
        people.city = city

        await people.save()

        console.log('people',people)
        res.json(people)
    }catch(error){
        return res.send({message: error.message});
    }
}

export const deletePeople = async (req, res) => {
    try{
        const {id} = req.params;
        await People.destroy({
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
    const people = await People.findByPk(id)
    res.json(people)
}