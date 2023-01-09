const { Router } = require('express');
const auth = require('./auth');
const restaurantRoute = require('./Restaurants');
const userRoute = require('./Users');

// import all controllers
// import SessionController from './app/controllers/SessionController';

const router = new Router();

// Add routes
router.use('/restaurants', restaurantRoute);
router.use('/users', userRoute);

module.exports = router;
