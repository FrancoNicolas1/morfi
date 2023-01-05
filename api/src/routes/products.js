const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { Products } = require("../db");

router.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(
      `https://63b36e9f5901da0ab37f8792.mockapi.io/api/restaurant/${id}`
    );
    res.json(data.products);
  } catch (error) {
    console.error(error);
  }
});

router.post("/create-product", async (req, res) => {
  try {
    const { name, photo, price, description } = req.body;
    if ((!name, !photo, !price, !description)) {
      res.json({ msg: "Please complete all fields" });
    }
    let newProduct = await Products.create({
      name,
      photo,
      price,
      description,
    });
    res.json(newProduct);
  } catch (error) {
    console.error(error);
  }
});

router.put("/update-product", (req, res) => {
  res.send("update product");
});

router.delete("/delete-product", (req, res) => {
  res.send("delete product");
});

module.exports = router;
