const { Router } = require('express');
const restaurantRoute = require('./Restaurants')

// import all controllers
// import SessionController from './app/controllers/SessionController';

const router = new Router();

// Add routes
 router.use('/restaurants', restaurantRoute)


module.exports = router;
