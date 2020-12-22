const express = require("express")
const argon2 = require("argon2")
const validator = require("email-validator");
const Users = require('../../models/user')

const router = new express.Router()

router.post("/users", async (req, res) => {
    const newUser = new Users(req.body)
    const email = validator.validate(newUser.email)
    // verification de l' email
    if (!email) {
        console.log("Mail non Valide")
        return res.status(401).send("Mail non Valide")
    }
    const document = await newUser.save()
    res.status(201).json(document)
})

router.get("/users", (req, res) => {
    const document = Users
        .find()
        .exec()
        .then(doc => res.send(doc))
        .catch(err => res.status(500).send(err))
})

//GET USERS BY ID
router.get("/users/:id", (req,res) => {
    const { id } = req.params
    const document = Users
    .findById(id)
    .exec()
    .then(doc => res.send(doc))
    .catch(err => res.status(500).send(err))
})

router.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deletedUser = await Users.findByIdAndDelete(id)
        res.status(201).json(deletedUser)

    }catch(err){
        res.status(500).send("Erreur lors de la suppression")
    }
})

router.patch("/users/:id", async (req, res) => {
    try {
        const { id } = req.params
        const acceptedFields = ["adresse", "phone", "password"]
        const keys = Object.keys(req.body).filter(key => acceptedFields.includes(key))
        const fieldsToUpdate = {}
        keys.map((key) => { 
            fieldsToUpdate[key] =  req.body[key]
        })
        const hashedPassword =  await argon2.hash(fieldsToUpdate["password"])
        fieldsToUpdate["password"] = hashedPassword 
        const doc = await Users.findByIdAndUpdate(id,  fieldsToUpdate , { new: true })
        res.json(doc)
    }
    catch (err) {
        res.status(500).send("Erreur lors de msj de l'utilisateur")
        console.log(err)
    }
})


module.exports = router