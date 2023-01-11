const { Router } = require("express");

// import all controllers
<<<<<<< HEAD
const controllerRestaurants = require("../controllers/restaurant.controller");
=======
// const controllerRestaurants = require('../controllers/restaurant.controller');
>>>>>>> 909772dc5dcc3e8c7f5c3fa695570ddc9263c67f

const routes = new Router();

// Add routes

<<<<<<< HEAD
routes.get("/", controllerRestaurants.getAllRestaurants);

routes.get("/:id", controllerRestaurants.getById);

routes.post("/:id", controllerRestaurants.newRestaurant);

routes.get("/name", controllerRestaurants.getRestaurantByName);

// routes.post('/', controllerRestaurants.postRestaurant)

// routes.put('/:id', controllerRestaurants.putRestaurant)

=======
// routes.get('/', controllerRestaurants.allRestaurants);

// routes.get('/:id', controllerRestaurants.getById)

// routes.post('/', controllerRestaurants.postRestaurant)

// routes.put('/:id', controllerRestaurants.putRestaurant)

>>>>>>> 909772dc5dcc3e8c7f5c3fa695570ddc9263c67f
// routes.delete('/:id', controllerRestaurants.deleteRestaurant)

module.exports = routes;
