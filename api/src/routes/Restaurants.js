const { Router } = require('express');

// import all controllers
const {
    getRestaurants,
    getRestaurantById,
  } = require('../controllers/restaurant.controller');

const routes = new Router();

// Add routes
routes.get('/', getRestaurants);
routes.get('/:id', getRestaurantById);

module.exports = routes;
