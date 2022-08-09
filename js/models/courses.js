const { DataTypes } = require('sequelize');
const { connection } = require('../connection');

let courses = connection.define(
  'courses',
  {
    course_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      course_title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      course_description: DataTypes.STRING,
      credits: DataTypes.INTEGER,
      duration: DataTypes.INTEGER,
      department_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
  },
  {
    createdAt: false,
    updatedAt: false,
    underscored: true
    
  }
);

module.exports = courses;
