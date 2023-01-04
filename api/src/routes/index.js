const { Router } = require('express');
const {
  getRestaurants,
  getRestaurantById,
  getRestaurantByName,
} = require('../controllers/restaurant.controller');
const {
  getCategories
} = require('../controllers/categories.controller');
// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Add routes RESTAURANTS
routes.get('/restaurants', getRestaurants);
routes.get('/restaurants/:id', getRestaurantById);
routes.get('/restaurant', getRestaurantByName);


// Add routes CATEGORIES
routes.get('/categories', getCategories);

module.exports = routes;
