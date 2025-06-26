const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('Product', {
  name: DataTypes.STRING,
  price: DataTypes.FLOAT,
  image: DataTypes.STRING,
  description: DataTypes.STRING
});

module.exports = Product;