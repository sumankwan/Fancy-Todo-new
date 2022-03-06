const { Todo } = require('../models/index.js')

function authorization (req, res, next) {
    let { id } = req.params
    Todo.findByPk(id)
        .then((data) => {
            if(!data) throw {msg: 'Todo not found', status: 401}
            else if (data.UserId == req.userData.id) next()
            else throw {msg: 'you are not authorized to do this', status: 401}
        })
        .catch((err) => {
            next(err)
        })
}

module.exports = {authorization}