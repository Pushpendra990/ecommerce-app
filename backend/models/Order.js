const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Order = sequelize.define('Order', {
  userId: DataTypes.INTEGER,
  totalAmount: DataTypes.FLOAT,
  items: DataTypes.JSON,
});

module.exports = Order;