const db = require("../models")
const sportEvent = db.sportEvents
const OP = db.Sequelize.Op

exports.findAll = (req, res) => {
    sportEvent.findAll()
    .then(data => {
        res.send(data)
    })
}