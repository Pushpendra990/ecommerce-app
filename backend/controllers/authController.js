const { User } = require('../models');
const generateToken = require('../utils/generateToken');


exports.register = async (req, res) => {
  const userExists = await User.findOne({ where: {email: req.body.email} });
  if (userExists) return res.status(400).json({ message: 'User already exists' });


  const user = await User.create(req.body);
  user.dataValues.token = generateToken(user.id);
  console.log("======user", user)
  res.status(201).json(user);
};

exports.login = async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (user && user.password === req.body.password) {
    user.dataValues.token= generateToken(user.id),
    res.json({ success: true, user });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};