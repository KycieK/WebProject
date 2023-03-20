module.exports = (connex, Sequelize) => {
    const sportEvent = connex.define("sportevents", {
        name: {
            type: Sequelize.STRING
        },
        preciseDate: {
            type: Sequelize.DATE
        },
        duration: {
            type: Sequelize.INTEGER
        },
        eventDescription: {
            type: Sequelize.TEXT
        },
        sportType: {
            type: Sequelize.STRING
        },
        maxAmountofPlayer: {
            type: Sequelize.INTEGER
        }
    })
    return sportEvent
}