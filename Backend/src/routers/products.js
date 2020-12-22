const express = require("express")
const Products = require('../../models/product')
const multer = require("multer")
const { mongo, Mongoose } = require("mongoose")

const storage = multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null, './uploads/' )
    },
    filename : function(req,file, cb) {
        cb(null, new Date().toISOString() + file.originalname)
    }
})
const upload = multer( { storage : storage})

const router = new express.Router()

router.post("/products", upload.single('image') ,async (req, res) =>  {
    
    const newProduct = new Products({
        _id = new Mongoose.Types.ObjectId(),
        designation: req.body.designation,
        description: req.body.description,
        categorie: req.body.categorie,
        prix: req.body.prix,
        stock: req.body.stcok,
        image: req.fil.path
    })
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

//GET product BY ID
router.get("/products/:id", (req,res) =>{
    const { id } = req.params
    const document = Products
    .findById(id)
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