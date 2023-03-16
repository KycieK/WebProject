module.exports = app => {
    const sportevent = require('../controllers/sportEvent.controller.js')
    const router = require('express').Router()

    router.get('/', sportevent.findAll)

    router.post('/', sportevent.create)

    router.get('/:id', sportevent.findOne)

    router.delete('/:id', sportevent.delete)

    router.put('/:id', sportevent.update)

    app.use('/api/sportevent', router)
}