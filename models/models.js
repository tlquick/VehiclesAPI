module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define("model", {
      model_name: {
        type: Sequelize.STRING,
        allowNull: false
      }}, {
        freezeTableName: true
      }
    )
  
    return model
  }