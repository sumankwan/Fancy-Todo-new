const router = require('express').Router()
const userController = require('../controller/userController.js').userController

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/googleSignIn', userController.googleSignIn)

module.exports = {router}