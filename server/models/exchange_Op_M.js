// /server/models/exchange_Op_M.js

module.exports = function(sequelize, DataTypes) {
   var Exchange_Op_M = sequelize.define("Exchange_Op_M", {
      document_type: {
         type:         DataTypes.STRING,
         allowNull:    false,
         validate:     {isIn: [["P", "S", "K"]]}   // P=Purchase / S=Sale / K=Kardex
      },
      document_id: {
         type:         DataTypes.STRING,
         allowNull:    false
      },
      date: {
         type:         DataTypes.DATEONLY,
         allowNull:    false
      },
      associate_id: {
         type:         DataTypes.STRING
      },
      internal_ref: {
         type:         DataTypes.STRING
      },
      external_ref: {
         type:         DataTypes.STRING
      },
      currency: {
         type:         DataTypes.STRING,
         allowNull:    false
      },
      exchange_rate: {
         type:         DataTypes.FLOAT,
         defaultValue: 0
      },
      notes: {
         type:         DataTypes.TEXT
      }
   });

   Exchange_Op_M.associate = function(models) {
      Exchange_Op_M.hasMany(models.Exchange_Op_D, {
         onDelete: "CASCADE"
      })
   };

   return Exchange_Op_M;
};
