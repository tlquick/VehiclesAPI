module.exports = (sequelize, Sequelize) => {
    const inventory = sequelize.define("inventory", {
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sold: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      }}, {
        freezeTableName: true
      }
    )
  
    return inventory
  }