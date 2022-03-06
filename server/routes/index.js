const router = require('express').Router()
const todoController = require('../controller/todoController.js').todoController
const holidayController = require('../controller/holidayController.js').holidayController
const authentication = require('../middlewares/authentication').authentication
const authorization = require('../middlewares/authorization').authorization
const todosRouter = require('./todos.js').router
const usersRouter = require ('./users.js').router

router.use('/todos', todosRouter)
router.use('/users', usersRouter)

router.use(authentication)

router.get('/', todoController.home)
router.post('/', todoController.create)
router.get('/todos', todoController.findAll)
router.get('/todos/:id', authorization, todoController.findOne)
router.put('/todos/:id', authorization, todoController.update)
router.delete('/todos/:id', authorization, todoController.delete)
router.get('/holiday/:year', holidayController.holiday)

module.exports = {router}