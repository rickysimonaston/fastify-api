// External Dependancies
const boom = require('boom');
// Get Data models
const Car = require('../models/Car');

// Get All Cars
exports.getCars = async (req, reply) => {
  try {
    const cars = await Car.find();
    return cars;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get Single Car
exports.getSingleCar = async (req, reply) => {
  try {
    const id = req.params.id;
    const car = await Car.findById(id);
    return car;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add New Car
exports.addCar = async (req, reply) => {
  try {
    const car = new Car({ ...req.body });
    return car.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Updating a existing car
exports.updateCar = async (req, reply) => {
  try {
    const id = req.params.id;
    const car = req.body;
    const { ...updateData } = car;
    const update = await Car.findByIdAndUpdate(id, updateData, { new: true });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a car
exports.deleteCar = async (req, reply) => {
  try {
    const id = req.params.id;
    const car = await Car.findByIdAndRemove(id);
    return car;
  } catch (err) {
    throw boom.boomify(err);
  }
};
