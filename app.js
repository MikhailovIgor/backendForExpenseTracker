// const fs = require('fs');
// const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user-routes');
const fuelRoutes = require('./routes/fuel-routes');
const carServiceRoutes = require('./routes/car-service-routes');

const app = express();

const URL =
  'mongodb+srv://igor:mikhailov86@cluster0.4837c.mongodb.net/expenseTracker?retryWrites=true&w=majority';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use('/user', userRoutes);
app.use('/fuel', fuelRoutes);
app.use('/car', carServiceRoutes);

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000))
  .catch((err) => console.log(err));
