const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const productRouter = require("./routers/products")
const userRouter = require("./routers/users")
const authRouter = require("./routers/auth")
const cartRouter = require("./routers/cart")
require('dotenv').config()

const conn ="mongodb+srv://cda-admin:admin@cluster0.kvxdf.mongodb.net/db-projetJs?retryWrites=true&w=majority"
const optionsMongoose =
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(conn, optionsMongoose).then(() =>console.log("connexion réussie")).catch((err )=> console.log(err))

//Initialisation des variables
const port = process.env.PORT || 3001
const corsOptions = {
    origin: "http://localhost:3000"
}

//Creation du server
const app = express()



app.use(express.json())
app.use(cors(corsOptions))
app.use(productRouter)
app.use(userRouter)
app.use(authRouter)
app.use(cartRouter)




//Lancement du server
app.listen(port, () => {
    console.log(`Serveur lancé: http://localhost:${port}`)
})














