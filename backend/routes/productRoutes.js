const express = require('express');
const { getProducts, createProduct } = require('../controllers/productController');
const router = express.Router();
const protect = require('../middleware/authMiddleware');

router.get('/', getProducts);
router.post('/create', createProduct);

module.exports = router;