module.exports = app => {
    const sportevent = require('../controllers/sportEvent.constroller.js')
    const router = require('express').Router()

    router.get('/', sportevent.findAll)

    app.use('/api/sportevent', router)
}