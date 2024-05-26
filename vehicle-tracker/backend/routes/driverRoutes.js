const express = require('express');
const driverController = require('../controllers/driverController');
const router = express.Router();

router.get('/', driverController.getAllDrivers);
router.get('/:id', driverController.getDriverById);
router.post('/', driverController.createDriver);
router.delete('/:id', driverController.deleteDriver);

module.exports = router;