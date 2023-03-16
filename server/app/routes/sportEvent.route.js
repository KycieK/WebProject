module.exports = app => {
    const sportEvent = require('../controllers/sportEvent.controller.js')
    const router = require('express').Router()

    router.get('/', sportEvent.findAll)

    router.post('/', sportEvent.create)

    router.get('/:id', sportEvent.findOne)

    router.delete('/:id', sportEvent.delete)

    router.put('/:id', sportEvent.update)

    app.use('/api/sportevent', router)
}