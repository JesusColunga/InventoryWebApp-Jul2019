// /server/models/product.js

module.exports = function(sequelize, DataTypes) {
   var Product = sequelize.define("Product", {
      user_id: {
         type:         DataTypes.STRING,
         allowNull:    false
      },
      description: {
         type:         DataTypes.TEXT,
         allowNull:    false
      },
      product_type: {
         type:         DataTypes.STRING,
         allowNull:    false,
         validate:     {isIn: [["P", "S"]]}   // P=Product / S=Service
      },
      family: {
         type:         DataTypes.STRING
      },
      existence: {
         type:         DataTypes.FLOAT,
         defaultValue: 0
      },
      unit_measure: {
         type:         DataTypes.STRING,
         allowNull:    false
      },
      cost: {
         type:         DataTypes.FLOAT,
         defaultValue: 0
      },
      price: {
         type:         DataTypes.FLOAT,
         defaultValue: 0
      },
      notes: {
         type:         DataTypes.TEXT
      }
   });
   return Product;
};
