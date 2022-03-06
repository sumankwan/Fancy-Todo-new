const { Todo } = require('../models/index.js')

class todoController {
    static home(req, res) {
        res.json({msg: 'welcome'})
    }

    static create(req, res, next) {
        let { title, description, status, due_date } = req.body
        let obj = { title, description, status, due_date }
        Todo.create({
                title: obj.title,
                description: obj.description,
                status: obj.status,
                due_date: obj.due_date,
                UserId: req.userData.id
            })
            .then((data) => {
                res.status(201).json({ todo: data })
            })
            .catch((err) => {
                next(err)
            })
    }

    static findAll(req, res, next) {
        Todo.findAll({
                where: {
                    UserId: req.userData.id
                }
            })
            .then((data) => {
                res.status(200).json({todo: data})
            })
            .catch((err) => {
                next(err)
            })
    }

    static findOne (req, res, next) {
        Todo.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then((data) => {
                if(!data) throw {msg: 'not found', status: 404}
                res.status(200).json({todo: data})
            })
            .catch((err) => {
                console.log(err)
                next(err)
            })
    }

    static update(req, res, next) {
        let { title, description, status, due_date } = req.body
        let obj = { title, description, status, due_date }
        Todo.update({
                title: obj.title,
                description: obj.description,
                status: obj.status,
                due_date: obj.due_date
            }, { where: {
                id: req.params.id
            }})
            .then((data) => {
                return Todo.findByPk(req.params.id)
            })
            .then((data2) => {
                if (!data2) throw {msg: 'not found', status: 404}
                res.status(200).json({todo: data2})
            })
            .catch((err) => {
                next(err)
            })
    }

    static delete(req, res, next) {
        let data1 = []
        Todo.findByPk(req.params.id)
            .then((data) => {
                if (!data) throw {msg: 'not found', status: 404}
                data1 = data
                return Todo.destroy({
                                where: {
                                    id: req.params.id
                                }
                            })
            })
            .then((data2) => {
                res.status(200).json({todo: data1})
            })
            .catch((err) => {
                next(err)
            })
    }
}

module.exports = {todoController}