const { DataTypes } = require('sequelize');
const { connection } = require('../connection');

let instructors = connection.define(
  'instructors',
  {
    instructor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      date_of_birth: DataTypes.DATE,
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      email: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      city: DataTypes.STRING,
      province: DataTypes.STRING,
      country: DataTypes.STRING,
      postal_code: DataTypes.STRING,
      department_id: DataTypes.INTEGER
  },
  {
    createdAt: false,
    updatedAt: false,
    underscored: true
    
  }
);

module.exports = instructors;