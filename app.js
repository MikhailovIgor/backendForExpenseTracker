// const fs = require('fs');
// const path = require('path');
const express = require('express');
// const mongoose = require('mongoose');

const userRoutes = require('./routes/user-routes');
const fuelRoutes = require('./routes/fuel-routes');
const carServiceRoutes = require('./routes/car-service-routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/user', userRoutes);
app.use('/car', fuelRoutes);
app.use('/car', carServiceRoutes);

app.listen(5000);
