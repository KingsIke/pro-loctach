const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Load UserModel
const User = require('../models/userDetails')

const Passport = (passport) =>{
// module.exports = function(passport) {
passport.use(
    new LocalStrategy({ usernameField: 'email'},(email,password,done) =>{
        //Match User
        User.findOne({ email:email})
        .then(user =>{
            if(!user) {
                return done(null,false, {message:'Email is not Registered'});
            }

            //Match password
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if(err) {
                    throw err
                };
                if(isMatch) {
                    return done(null, user)
                }else{
                    return done(null, false, {message:'Password is Incorrect'})
                }
            })
        })
        .catch(err => console.log(err)); 
    })
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});
 
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user)
    })
})
}
module.exports = Passport