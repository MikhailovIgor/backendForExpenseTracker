const express = require('express');
const router = express.Router();

const carServiceController = require('../controllers/car-service-controller');

router.get('/service', carServiceController.getCarServiceData);
router.post('/addService', carServiceController.addCarServiceExpense);

module.exports = router;
