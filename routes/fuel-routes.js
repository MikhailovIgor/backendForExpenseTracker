const express = require('express');
const { check } = require('express-validator');

const router = express.Router();

const fuelController = require('../controllers/fuel-controller');

router.get('/getFuel/:user', fuelController.getFuelData);
router.post(
  '/addFuel',
  check('money').not().isEmpty(),
  fuelController.addFuelExpense
);

module.exports = router;
