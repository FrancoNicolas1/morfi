const { Router } = require('express');
const {
  getRestaurants,
  getRestaurantById,
  getRestaurantByName,
} = require('../controllers/restaurant.controller');

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Add routes
routes.get('/restaurants', getRestaurants);
routes.get('/restaurants/:id', getRestaurantById);
routes.get('/restaurant', getRestaurantByName);

module.exports = routes;
