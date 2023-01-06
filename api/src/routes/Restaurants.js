const { Router } = require('express');
const {axios} = require('axios');
const {Restaurant, Products, Categories} = require('../db.js');

// import all controllers
const controllerRestaurants = require('../controllers/restaurant.controller');

const routes = new Router();



// Add routes
routes.get('/', controllerRestaurants.allRestaurants);

routes.get( '/:id', controllerRestaurants.getById)

routes.put('/:id', controllerRestaurants.putRestaurant)

routes.delete('/:id', controllerRestaurants.deleteRestaurant)

module.exports = routes;
