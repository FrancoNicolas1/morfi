const { Router } = require('express');

// import all controllers
const controllerRestaurants = require('../controllers/restaurant.controller');

const routes = new Router();

// Add routes
routes.get('/', controllerRestaurants.allRestaurants);

routes.get('/', controllerRestaurants.allRestaurants);

routes.get('/:id', controllerRestaurants.getById)

routes.post('/', controllerRestaurants.postRestaurant)

routes.put('/:id', controllerRestaurants.putRestaurant)

routes.delete('/:id', controllerRestaurants.deleteRestaurant)

module.exports = routes;
