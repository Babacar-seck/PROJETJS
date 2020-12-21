const express = require("express")
const mongoose = require("mongoose")
const Product = require("../models/product.js")
const User = require("../models/user.js")
require("dotenv").config()


const optionMongoose =
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose
    .connect(process.env.CONNECTION_URI, optionMongoose)
    .then(() => {
        console.log("Connexion à Atlas réussie")
    })
    .catch(() => {
        console.log("Connnexion à Atlas echoué")
    });



//Initialisation des variables
const port = process.env.PORT || 3000

//Creation du server
const app = express()

//Lancement du server
app.listen(port, () => {
    console.log(`Serveur lancé: http://localhost:${port}`)
  })















