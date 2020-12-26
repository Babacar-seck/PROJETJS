const LocalStrategy = require('passport-local').Strategy;
const express = require("express")
const argon2 = require("argon2")
const Users = require("../../models/user")
const router = new express.Router()

function initialize(passport){
    const authenticateUser = async  (email, password, done) => {
        const user = await Users.findOne({ email })
        if(user == null){
            return done (null , false,  {message : 'No user with that email ' })
        }

        try {
            console.log(user.password)
            console.log(password)
            if ( !await argon2.verify(user.password, password)) {
                console.log("erreur de mdp")
                return done(null, false, { message: 'Password incorrect ' })
        }else{
            return done(null,user)

        }
        } catch (e) {
            return done(e)
        }
    }


    passport.use(new LocalStrategy({ usernameField: 'email' }, 
    authenticateUser ))
    passport.serializeUser((user, done) => {
        return console.log(user)
    });
    
    passport.deserializeUser( (id, done) =>  {
        return done(null, Users.findById(user => user._id === id))
        });
}


module.exports =  initialize