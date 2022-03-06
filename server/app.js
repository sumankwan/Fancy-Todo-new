if (process.env.NODE_ENV !== "production"){
    require("dotenv").config()
  }
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes/index.js').router
const errHandler = require('./middlewares/errHandler').errHandler
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(router)
app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(errHandler)

app.listen(port, () => {
    console.log(port)
})