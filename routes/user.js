const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();

router.get('/login',userController.getLogin)

router.post('/login', userController.postLogin)

router.get('/register', userController.getRegister)

router.post('/register', userController.postRegister)

router.get('/logout', userController.getLogout)

 module.exports = router;