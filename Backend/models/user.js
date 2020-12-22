const mongoose = require("mongoose")
const argon2 = require("argon2")

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    adresse: {
        rue: {
            type: String,
            required: true,
        },
        code_Postal: {
            type: Number,
            required: true,
        },
        ville: {
            type: String,
            required: true,
        }
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

    cartItems: {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, default: 1 },
        //prix: { type: Number, required: true }
    }



})
userSchema.pre("save", async function (res) {
    try {
        const hashedPassword = await argon2.hash(this.password)
        this.password = hashedPassword
    } catch (e) {
        console.log(e)
    }
})




const User = mongoose.model("user", userSchema)

module.exports = User