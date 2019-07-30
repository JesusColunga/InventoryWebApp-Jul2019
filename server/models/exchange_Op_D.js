// /server/models/exchange_Op_D.js

module.exports = function(sequelize, DataTypes) {
   var Exchange_Op_D = sequelize.define("Exchange_Op_D", {
      master_id: {
         type:         DataTypes.STRING,
         allowNull:    false
      },
      line_no: {
         type:         DataTypes.INTEGER,
         allowNull:    false
      },
      product_id: {
         type:         DataTypes.TEXT,
         allowNull:    false
      },
      quantity: {
         type:         DataTypes.FLOAT,
         defaultValue: 0
      },
      unit_measure: {
         type:         DataTypes.STRING,
         allowNull:    false
      },
      unit_cost: {
         type:         DataTypes.FLOAT,
         defaultValue: 0
      },
      unit_price: {
         type:         DataTypes.FLOAT,
         defaultValue: 0
      },
      line_cost: {
         type:         DataTypes.FLOAT,
         defaultValue: 0
      },
      line_price: {
         type:         DataTypes.FLOAT,
         defaultValue: 0
      },
      notes: {
         type:         DataTypes.TEXT
      }
   });
   return Exchange_Op_D;
};
