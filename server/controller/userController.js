const { User } = require('../models/index.js')
const { comparePass } = require('../helpers/bcrypt.js')
const { generateToken } = require('../helpers/jwt.js')
const {OAuth2Client} = require('google-auth-library');

class userController {
    static register (req, res, next) {
        let { email, password } = req.body
        let obj = { email, password }
        User.create(obj)
            .then((data) => {
                res.status(201).json({ user: data })
            })
            .catch((err) => {
                next(err)
            })
    }

    static async login (req, res, next) {
        try {
            let { email, password } = req.body
            let obj = { email, password }
            const user = await User.findOne({
                    where: {
                        email: obj.email
                    }
                })
                    
                if(!user) {
                    throw {msg: `invalid email or password`, status: 401}   
                }
                
                let comparePassword = comparePass(password, user.password)
                if (!comparePassword) {
                    throw {msg: `invalid email or password`, status: 401}  
                }

                let payload = {
                    id: user.id,
                    email: user.email,
                }

                let token = generateToken(payload)
                res.status(200).json({token})

        } catch (err) {
            next(err)
        }
    }

    static googleSignIn (req, res, next) {
        let { id_token } = req.body
        const client = new OAuth2Client(process.env.CLIENT_ID)
        let email = null
        client.verifyIdToken({
            idToken: id_token,
            audience: process.env.CLIENT_ID
        })
            .then((ticket) => {
                const payload = ticket.getPayload()
                email = payload.email
                return User.findOne({
                        where: {
                            email: payload.email
                        }
                    })
            })
            .then((user) => {
                if (user) {
                    return user
                } else {
                    return User.create({
                        email: email,
                        password: '123456'
                    })
                }
            })
            .then((data) => {
                let payload = {
                    id: data.id,
                    email: data.email
                }
                const token = generateToken(payload)
                console.log(token, '<<< ini token')
                res.status(200).json({token})
            })
            .catch((err) => {
                console.log(err)
                next(err)
            })
    }

}

module.exports = {userController}