const dbConfig = require('../config/db.config.js');
const Sequelize = require('sequelize');
const connex = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {

    host: dbConfig.HOST,
    dialect: "mysql", 
    port: 3307, 
    operatorsAliases: false
})
const db = {}
db.Sequelize = Sequelize
db.connex = connex
db.sportEvents = require('./sportEvent.model.js')(connex, Sequelize)
db.users = require('./user.model.js')(connex, Sequelize)
db.participants = require('./participant.model.js')(connex, Sequelize)
module.exports = db

participant.belongsTo(sportEvent, {id})
participant.belongsTo(user, {id})
sportEvent.hasMany(user, {through: participant})
user.hasMany(this.sportEvents, {through: participant})