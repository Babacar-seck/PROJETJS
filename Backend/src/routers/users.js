const express = require("express")
const Users = require('../../models/user')

const router = new express.Router()

router.post("/users", async (req, res) => {
    const newUser = new Users(req.body)
    const document = await newUser.save()
    res.status(201).json(document)
})



module.exports = router
