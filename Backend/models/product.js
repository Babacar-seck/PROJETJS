const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    designation: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    categorie: {
        type: String,
        required : true,
        enum: ["Hommes", "Femmes", "Enfants"]
    },
    prix: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        default: 0,
    },
    image: {
        type: String,
        required: true,
    }
})



const Product = mongoose.model("Product", productSchema)

module.exports = Product


