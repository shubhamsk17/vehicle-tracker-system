const express = require('express');
const vehicleController = require('../controllers/vehicleController');
const router = express.Router();

router.get('/', vehicleController.getAllVehicles);
router.get('/:id', vehicleController.getVehicleById);
router.post('/', vehicleController.createVehicle);
router.delete('/:id', vehicleController.deleteVehicle);

module.exports = router;