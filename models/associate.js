// /server/models/associate.js

module.exports = function(sequelize, DataTypes) {
   var Associate = sequelize.define("Associate", {
      associate_type: {
         type:         DataTypes.STRING,
         allowNull:    false,
         validate:     {isIn: [["P", "C"]]}   // P=Provider / C=Client
      },
      user_id: {
         type:         DataTypes.STRING,
         allowNull:    false
      },
      name: {
         type:         DataTypes.STRING,
         allowNull:    false
      },
      tax_id: {
         type:         DataTypes.STRING
      },
      address: {
         type:         DataTypes.TEXT
      },
      email: {
         type:         DataTypes.STRING
      },
      phone: {
         type:         DataTypes.STRING
      },
      notes: {
         type:         DataTypes.TEXT
      }
   });
   return Associate;
};
