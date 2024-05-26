const TransferHistory = require('../models/transferHistory');
const Driver = require('../models/driver');
const Vehicle = require('../models/vehicle');

exports.transferVehicle = async (req, res) => {
    const { fromDriverId, toDriverId, vehicleId, otherEntity } = req.body;

    const vehicle = await Vehicle.findByPk(vehicleId);
    const fromDriver = await Driver.findByPk(fromDriverId);
    const toDriver = toDriverId? await Driver.findByPk(toDriverId): null;

    if(!vehicle || !fromDriver || (toDriverId && !toDriver)){
        return res.status(400).json({ error: 'Invalid Data Provided'});
    }

    const transfer = await TransferHistory.create({
        fromDriverId,
        toDriverId,
        vehicleId,
        otherEntity,
    });

    res.json(transfer);
};

exports.getTransferHistory = async (req, res) => {
    const history = await TransferHistory.findAll({
        where: { vehicleId: req.params.vehicleId },
        include: {Driver, Vehicle},
    });
    res.json(history);
}