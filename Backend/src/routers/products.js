const express = require("express")
const Products = require('../../models/product')

const router = new express.Router()

router.post("/products", async (req, res) =>  {
    const newProduct = new Products(req.body)
    const document = await newProduct.save()
    res.status(201).json(document)
})

router.get("/products" , (req,res) => {
    const document = Products
    .find()
    .exec()
    .then(doc => res.send(doc))
    .catch(err => res.status(500).send(err))
})


router.delete("/products/:id",  async (req,res) => {
    const { id }  = req.params
 
        const deletedProduct = await Products.findByIdAndDelete(id)
    console.log(deletedProduct)
        res.json(deletedProduct).send("Erreur")

})


router.patch("/products/:id", async (req, res) => {
    try{
        const { id } =req.params
         const acceptedFields = ["prix","stock","image"]
         const keys = Object.keys(req.body).filter(key => acceptedFields.includes(key))
         console.log(keys)
         const fieldsToUpdate = {}
        keys.map(key => fieldsToUpdate[key] = req.body[key])
        console.log(fieldsToUpdate)

        const doc = await  (await Products.findByIdAndUpdate(id,fieldsToUpdate,{new : true}))
        res.json(doc)
    }catch(err){
        res.status(500).send("Erreur lors de msj de l'article")
        console.log(err)
    }
})






module.exports = router