const express = require("express")
const  Cart = require("../../models/cart")

const router = new express.Router()



router.post("/user/cart/addToCart",  async (req, res) => {
    const newCart = new Cart(req.body)
    const document = await newCart.save()
    res.status(201).json(document)
   
})


module.exports = router
