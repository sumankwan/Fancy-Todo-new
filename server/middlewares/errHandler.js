function errHandler(err, req, res, next) {
    console.log(err, 'error dari handler')
    let errors = []
    let statusCode = 500

    switch(err.name) {
        case 'SequelizeUniqueConstraintError':
            err.errors.forEach(element => {
                errors.push(element.message)
            })
            statusCode = 400
            break
        case 'SequelizeValidationError':
            err.errors.forEach(element => {
                errors.push(element.message)
            })
            statusCode = 400
            break
        case 'JsonWebTokenError':
            errors.push('you are not authorized to do this')
            statusCode = 401
            break
        default:
            errors.push(err.msg)
            statusCode = err.status || statusCode
    }
    res.status(statusCode).json({
        errors: errors
    })
}

module.exports = {errHandler}