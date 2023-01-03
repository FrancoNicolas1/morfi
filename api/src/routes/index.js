const { Router } = require("express");
const restaurants = require("./restaurants");

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = Router();

// Add routes
// routes.get('/', SessionController.store);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

routes.use("/", restaurants);

module.exports = routes;
