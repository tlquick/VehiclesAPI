module.exports = (sequelize, Sequelize) => {
    const vehicle = sequelize.define("vehicle", {
      
    }, {
      freezeTableName: true
    })
    
    return vehicle
  }