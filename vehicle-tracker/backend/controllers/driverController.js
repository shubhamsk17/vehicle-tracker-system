const Driver = require('../models/driver');

exports.getAllDrivers = async (req, res) => {
    const drivers = await Driver.findAll();
    res.json(drivers);
};

exports.createDriver =  async (req, res) => {
    const driver = await Driver.create(req.body);
    res.json(driver);
};

exports.getDriverById = async (req, res) => {
    const driver = await Driver.findByPk(req.params.id);
    res.json(driver);
};

exports.deleteDriver = async (req, res) => {
    await Driver.destroy({ where: {id: req.params.id} });
    res.sendStatus(204);
};

