const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const authRoute = require('./routes/auth');
const productsRoute = require('./routes/products');

const app = express();

const connect = () => {
  mongoose
    .connect(process.env.MONGODB)
    .then(() => console.log('Connected'))
    .catch((err) => console.log(err));
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoute);
app.use('/api/products', productsRoute);

app.listen(process.env.PORT, () => {
  connect();
  console.log(`Server is running on port ${process.env.PORT}`);
});
