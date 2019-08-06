// /server/models/user.js

module.exports = function(sequelize, DataTypes) {
   var User = sequelize.define("User", {

       firstname: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
           notEmpty: false,
           len: {
             args: [1],
             msg: "No first name provided"
           }
         }
       },
   
       lastname: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
           notEmpty: false,
           len: {
             args: [1],
             msg: "No last name provided"
           }
         }
       },
   
       phone: {
         type: DataTypes.STRING,
         allowNull: false,
         isNumeric: true
       },
   
       email: {
         type: DataTypes.STRING,
         allowNull: false,
         isEmail: true
       },
   
       password: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
           notEmpty: false,
           len: {
             args: [5],
             msg: "At least 5 characters"
           }
         }
       },
   
   
   });
   return User;
};
