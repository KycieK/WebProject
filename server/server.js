const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const cookieParser = require('cookie-parser')

const corsOptions = {
    origin: 'http://localhost:8081',
    credentials: true
}

app.use(cookieParser())
app.use(cors(corsOptions))

//models
const db = require('./app/models')
db.connex.sync()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({ message: 'Welcome back !' })
})

//router
require('./app/routes/sportEvent.route')(app)
require('./app/routes/user.route')(app)
const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


