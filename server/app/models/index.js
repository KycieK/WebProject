const dbConfig = require('../config/db.config.js');
const Sequelize = require('sequelize');
const connex = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {

    host: dbConfig.HOST,
    dialect: "mysql", 
    port: 3307, 
    operatorsAliases: false
})
const db = {}
const sportEvent = require('./sportEvent.model.js')(connex, Sequelize)
const user = require('./user.model.js')(connex, Sequelize)
const participant = require('./participant.model.js')(connex, Sequelize)
db.Sequelize = Sequelize
db.connex = connex
db.sportEvents = require('./sportEvent.model.js')(connex, Sequelize)
db.users = require('./user.model.js')(connex, Sequelize)
db.participants = require('./participant.model.js')(connex, Sequelize)
module.exports = db

sportEvent.hasMany(participant, {foreignKey: 'eventName'})
participant.belongsTo(sportEvent, {foreignKey: 'name'})
user.hasOne(participant, {foreignKey: 'userName'})
participant.belongsTo(user, {foreignKey: 'fullname'})


