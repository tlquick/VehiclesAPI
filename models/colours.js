module.exports = (sequelize, Sequelize) => {
    const colour = sequelize.define("colour", {
      colour_name: {
        type: Sequelize.STRING,
        allowNull: false
      }}, {
        freezeTableName: true
      }
    )
  
    return colour
  }