module.exports = app => {
    const participant = require('../controllers/participant.controller.js')
    const router = require('express').Router()

    router.get('/', participant.findAll)

    router.post('/', participant.create)

    router.get('/:id', participant.findOne)

    router.delete('/:id', participant.delete)

    router.put('/:id', participant.update)

    app.use('/api/participant', router)
}