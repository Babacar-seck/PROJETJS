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
        rue:{
            type :String,
            required: true,
        },
        code_Postal: {
            type: Number,
            required: true,
        },
        ville:{
            type :String,
            required: true,
        } 
    },
    phone:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    }

})

const User = mongoose.model("user", userSchema)

module.exports = User