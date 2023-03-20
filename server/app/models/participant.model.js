module.exports = (connex, Sequelize) => {
    const participant = connex.define("participants", {
        eventName: {
            type: Sequelize.STRING
        },
        userName: {
            type: Sequelize.STRING
        },
    })
    return participant
}