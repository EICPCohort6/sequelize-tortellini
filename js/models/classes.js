const { DataTypes } = require('sequelize');
const { connection } = require('../connection');

let classes = connection.define(
  'classes',
  {
      class_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      seats: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      semester: {
        type: DataTypes.STRING,
        allowNull: false
      }, 
      instructor_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      room_id: DataTypes.INTEGER,
      course_id: DataTypes.INTEGER
  },
  {
    createdAt: false,
    updatedAt: false,
    underscored: true
    
  }
);

module.exports = classes;
