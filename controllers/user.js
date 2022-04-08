const User  = require('../models/userDetails')
const bcrypt = require('bcrypt')
const { hash } = require('bcrypt')
const passport = require('passport')

exports.getLogin = (req,res) => {
    res.render('login',{title:'LogIn',path:'/login'})
}

exports.postLogin = (req,res,next) => {
    passport.authenticate('local',{
        successRedirect:'/',
        failureRedirect:'/login',
        failureFlash: true
    })
    (req,res,next);
}; 

exports.getRegister = (req,res) => {
    res.render('register', {title:'Register',path:'/register'})
}

exports.postRegister = (req,res) => {

    // DATA COLLECTION
    const { username, email, password, password1} = req.body;
    let messages = [];

    //Checking for Required Fields
    if(!username || !email || !password || !password1){
        messages.push({msg: 'Please fill all Fields'});
    }

    //Checking Password
    if(password !== password1){
        messages.push({ msg: 'Password do not match'})
    }

    //checking password Length
    if(password.length < 6){
        messages.push({ msg: 'Password shoulld be 6 character'})
    }

    if(messages.length > 0 ){
        
        res.render('register', {title:'Register',path:'/register',messages,username,email,password,password1})
    }else{
        //VALIDATION PASSED
        User.findOne({username:username})
        .then(user => {
            if(user) { 
                //already Exiting User
                messages.push({ msg: 'Email/Username is already registered'});
                res.render('register', {title:'Register',path:'/register',messages,username,email,password,password1})


            }else{
                const newUser = new User({
                    username,email,password
                }) ;

                // CONFIG PASSWORD WITH bcrypt
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;

                        //Set Password to hashed
                        newUser.password = hash;
                        
                        //Saving New User for mongoDB

                        newUser.save()
                        .then(user => {
                            req.flash('success_msg', 'Thanks for Registering,You can Log In')
                            res.redirect('/login')
                        })
                        .catch(err => console.log(err));

                    })
                })

                
              
            }
        })
        // res.status(404).render('404', {title:'Bad Page',path:'*'});
        
    }
    // console.log(req.body)
    // res.send('kingsike')
    // res.render('register', {title:'Register',path:'/register'})
}

exports.getLogout = (req,res) => {
    req.logout();
    req.flash('success_msg', 'You just Loggged out');
    res.redirect('/login')
}