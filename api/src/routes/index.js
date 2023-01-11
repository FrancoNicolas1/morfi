const { Router } = require("express");
const auth = require("./auth");
const restaurantRoute = require("./Restaurants");
const userRoute = require("./Users");
const products = require("./products");
const categories = require("./categories")


// import all controllers
// import SessionController from './app/controllers/SessionController';

const router = new Router();

// Add routes
<<<<<<< HEAD
router.use("/restaurants", restaurantRoute);
router.use("/users", userRoute);
router.use("/", products);
router.use("/", auth);
router.use("/", categories);

=======
router.use('/restaurants', restaurantRoute);
router.use('/users', userRoute);
// router.use('/users', userRoute);
>>>>>>> 909772dc5dcc3e8c7f5c3fa695570ddc9263c67f
module.exports = router;
