const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({ dialect: 'sqlite', storage: './ecommerce.sqlite' });

module.exports = sequelize;