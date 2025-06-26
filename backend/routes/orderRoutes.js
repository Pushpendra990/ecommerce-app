const express = require('express');
const { createOrder } = require('../controllers/orderController');
const router = express.Router();

const protect = require('../middleware/authMiddleware');

router.post('/',protect, createOrder);

module.exports = router;