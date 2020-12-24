const express = require("express")
const Products = require('../../models/product')
const multer = require("multer")


const storage = multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null, './uploads/' )
    },
    filename : function(req,file, cb) {
        cb(null,  file.originalname)
    }
})
const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

const router = new express.Router()

router.post("/products", upload.single('image') ,  async  (req, res) =>  {
    console.log(req.file.path)
    const newProduct = new Products({
        designation : req.body.designation,
        description : req.body.description,
        categorie : req.body.categorie,
        prix : req.body.prix,
        stock : req.body.stock,
        image : req.file.filename
    })
   const document  = await newProduct
    .save()
    .then(doc => console.log(doc));
    res.status(201).send("Created Success")
})

router.get("/products" , (req,res) => {
    const document = Products
    .find()
    .limit(9)
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