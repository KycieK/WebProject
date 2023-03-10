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

module.exports = db