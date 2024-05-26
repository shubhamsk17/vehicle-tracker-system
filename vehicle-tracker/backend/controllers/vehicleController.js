const Vehicle = require('../models/vehicle');

exports.getAllVehicles = async (req, res) => {
    const vehicles = await Vehicle.findAll();
    res.json(vehicles);
};

exports.createVehicle = async (req, res) => {
    const vehicle = await Vehicle.create(req.body);
    res.json(vehicle);
};

exports.getVehicleById = async (req, res) => {
    const vehicle = await Vehicle.findByPk(req.params.id);
    res.json(vehicle);
};

exports.deleteVehicle = async (req, res) => {
    await Vehicle.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
};