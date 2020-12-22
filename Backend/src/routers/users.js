const express = require("express")
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
router.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deletedUser = await Users.findByIdAndDelete(id)
        res.status(201).json(deletedUser)

    }catch(err){
        res.status(500).send("Erreur lors de la suppression")
    }
})

module.exports = router
