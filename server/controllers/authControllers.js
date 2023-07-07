const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!(username && password)) {
      return res.status(400).json({ message: 'Please provide username and password' });
    }

    if (username.length < 1 || username.length > 15) {
      return res.status(400).json({ message: 'Username must be between 1 and 15 characters' });
    }

    const isExisting = await User.findOne({ username });
    if (isExisting) {
      return res.status(400).json({ message: 'User already exists' });
    }

    if (password.length < 1 || password.length > 15) {
      return res.status(400).json({ message: 'Password must be between 1 and 15 characters' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    const { password: pass, ...otherData } = newUser._doc;
    const token = jwt.sign({ id: newUser._id, isAdmin: newUser.isAdmin }, process.env.JWT_SECRET);

    return res.status(200).json({ token, ...otherData });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!(username && password)) {
      return res.status(400).json({ message: 'Please provide username and password' });
    }

    const isExisting = await User.findOne({ username });
    if (!isExisting) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const { password: pass, ...otherData } = isExisting._doc;
    const token = jwt.sign(
      { id: isExisting._id, isAdmin: isExisting.isAdmin },
      process.env.JWT_SECRET,
    );
    res.status(200).json({ token, ...otherData });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { login, signup };
