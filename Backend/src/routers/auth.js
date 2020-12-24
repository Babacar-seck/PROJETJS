const express = require("express")
const argon2 = require("argon2")
const Users = require("../../models/user")

const router = new express.Router()

router.post("/login", async (req, res) => {
    try {
        const { email, password, username } = req.body
        console.log(req.body)
        const user = await Users.findOne({ email })
        if (!user) {
            return res.status(401).send("€rreur de MDP et/ou d'Username")
        }
        if (!await argon2.verify(user.password, password)) {
            console.log("erreur de mdp")
            return res.status(401).send("Erreur de MDP et/ou d'username")
        }
        return res.status(200).send(user._id)
    } catch (err) {
        console.log(err)
        res.status(500).send("Erreur lors du login")
    }
})

module.exports = router