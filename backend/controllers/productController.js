const { Product } = require('../models');

exports.getProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json({data: products});
};

exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
};