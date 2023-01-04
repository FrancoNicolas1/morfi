<<<<<<< HEAD
const { Router } = require("express");
const restaurants = require("./restaurants");
const auth = require("./auth");
=======
const { Router } = require('express');
const {
  getRestaurants,
  getRestaurantById,
  getRestaurantByName,
} = require('../controllers/restaurant.controller');
>>>>>>> bf31adb580653afd9b36fd17e946d19615ab134e

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = Router();

// Add routes
routes.get('/restaurants', getRestaurants);
routes.get('/restaurants/:id', getRestaurantById);
routes.get('/restaurant', getRestaurantByName);

routes.use("/", restaurants);
routes.use("/", auth);

module.exports = routes;
