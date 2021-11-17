const db = require('./database');
const Sequelize = require('sequelize');

const Robot = db.define('Robot', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  fuelType: {
    type: Sequelize.ENUM({
      values: ['gas', 'diesel', 'electric'],
    }),
    defaultValue: 'electric',
  },
  fuelLevel: {
    type: Sequelize.FLOAT,
    validate: {
      max: 100,
      min: 0,
    },
    defaultValue: 100,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
});

module.exports = Robot;
