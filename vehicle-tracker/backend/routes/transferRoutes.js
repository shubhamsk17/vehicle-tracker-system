const express = require('express');
const transferController = require('../controllers/transferController');
const router = express.Router();

router.get('/history/:vehicleId', transferController.getTransferHistory);
router.post('/transfer', transferController.transferVehicle);

module.exports = router;