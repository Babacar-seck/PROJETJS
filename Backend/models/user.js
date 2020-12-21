const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required:true,
    },
    lastname:{
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    adresse:{
        type: Object,
        required: true,
        code_Postal: {
            type: Number,
            required: true,
        },
        ville: String,
        required: true,
    },
    telephone:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }

})

const User = mongoose.model("user", userSchema)

module.exports = User