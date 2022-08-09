const { Sequelize } = require('sequelize');

const connection = new Sequelize(
  'mysql://root:pupas202@localhost:3306/course_manager',
  {
    logQueryParameters: true,
  }
);

module.exports = { connection };
