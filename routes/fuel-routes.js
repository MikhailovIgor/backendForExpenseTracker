const express = require('express');
const router = express.Router();

const fuelController = require('../controllers/fuel-controller');

router.get('/fuel', fuelController.getFuelData);
router.post('/addFuel', fuelController.addFuelExpense);

module.exports = router;
