const { Router } = require("express");
const restaurants = require("./restaurants");
const auth = require("./auth");
const {
  getRestaurants,
  getRestaurantById,
  getRestaurantByName,
} = require("../controllers/restaurant.controller");

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = Router();

// Add routes
routes.get("/restaurants", getRestaurants);
routes.get("/restaurants/:id", getRestaurantById);
routes.get("/restaurant", getRestaurantByName);

routes.use("/", restaurants);
routes.use("/", auth);

module.exports = routes;
