module.exports = (sequelize, Sequelize) => {
    const make = sequelize.define("make", {
      make_name: {
        type: Sequelize.STRING,
        allowNull: false
      }}, {
        freezeTableName: true
      }
    )
  
    return make
  }