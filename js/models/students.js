const { DataTypes } = require('sequelize');
const { connection } = require('../connection');

let students = connection.define(
  'students',
  {
   student_id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.INTEGER
   },
   first_name: DataTypes.STRING,
   last_name: DataTypes.STRING,
   date_of_birth: DataTypes.DATE,
   email: DataTypes.STRING,
   phone_number: DataTypes.STRING(30),
   city: DataTypes.STRING,
   province: DataTypes.STRING(100),
   country: DataTypes.STRING(150),
   postal_code: DataTypes.STRING(10),
   department_id: {
    allowNull: false,
    type: DataTypes.INTEGER
   }
  },
  {
    createdAt: false,
    updatedAt: false,
    underscored: true
    
  }
);

module.exports = students;
