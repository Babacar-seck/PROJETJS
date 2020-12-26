if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const Users = require("../models/user")
const productRouter = require("./routers/products")
const userRouter = require("./routers/users")
const authRouter = require("./routers/auth")
const cartRouter = require("./routers/cart")
const passport= require("passport")
const flash = require('express-flash')
const session = require('express-session')
const cookieParser = require('cookie-parser')


// require('dotenv').config()

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

// const logger = (req, res, next) => {
//     console.log(req);
//     next()
// }

// Middleware
app.use(express.json())
app.use(cors(corsOptions))
// app.use(logger)
app.use(productRouter)
app.use(userRouter)
app.use(authRouter)
app.use(cartRouter)
app.use(express.static('uploads'));
// *********************//
app.use(flash())
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret : process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized: false
}))
app.use(express.static('./public'))
app.use(cookieParser());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(passport.initialize())
app.use(passport.session())
const initializePassport = require("./routers/passport")
initializePassport(passport)



//Lancement du server
app.listen(port, () => {
    console.log(`Serveur lancé: http://localhost:${port}`)
})














