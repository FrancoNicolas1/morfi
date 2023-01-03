const { Router } = require("express");
const router = Router();
const axios = require("axios");

const getApiInfo = async () => {
  const apiUrl = await axios.get(
    `https://63b36e9f5901da0ab37f8792.mockapi.io/api/restaurant`
  );
  console.log("🚀 ~ file: prueba.js:9 ~ getApiInfo ~ apiUrl.data", apiUrl.data);
  const apiInfo = await apiUrl.data.map((e) => {
    return {
      id: e.id,
      name: e.name,
      photo: e.photo,
      description: e.description,
    };
  });
  return apiInfo;
};

const getAll = async () => {
  const apiInfo = await getApiInfo();
  return apiInfo;
};

router.get("/restaurants", async (req, res) => {
  let { id } = req.query;
  let restaurants = await getAll();
  if (id) {
    let restaurantFilter = restaurants.filter((r) => r.id === id);
    restaurantFilter.length > 0
      ? res.status(200).json(restaurantFilter)
      : res.status(400).send("The restaurant doesn't exist");
  } else {
    res.status(200).json(restaurants);
  }
});

module.exports = router;
