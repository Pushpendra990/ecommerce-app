const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
require('dotenv').config();


const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

sequelize.sync().then(() => {
  app.listen(5000, () => console.log('Server started on port 5000'));
});