const axios = require('axios');
const {Restaurant, Categories, Products} = require('../db.js');

const getRestaurants = async (req, res) => {
  const { name } = req.query;
    let restaurantTable = await Restaurant.findAll({
        include: [{
            model: Categories,
            attributes: ["name"],
            through: {
                attributes: []
            }
        },
        {
          model: Products,
          attributes: ["name"],
          through: {
              attributes: []
          }
      }],
        order: [
            ['id', 'ASC']
        ]
    });

    if (restaurantTable.length > 1) res.send(restaurantTable);

    let categoryTable = await Categories.findAll({});
    
    if (restaurantTable.length === 0 && categoryTable.length === 0) {
      try {
        let restaurants = require("../info/RestInfo.json");


            let Bulkproducts = restaurants.map(p => {
              return {
                name: p.name,
                photo: p.photo,
                reviews: p.reviews[0] ? p.reviews[0] : "None",
                products: p.products[0].name,
                category: p.category[0].name ? p.category[0].name : "None",
                description: p.description ? p.description : "None",
                };
            });

            await Restaurant.bulkCreate(Bulkproducts);

            let info = restaurants.map(p => {
                return {
                    id: p.id,
                    name: p.name,
                    photo: p.photo,
                    reviews: p.reviews[0] ? p.reviews[0] : "None",
                    products: p.products[0].name,
                    category: p.category[0].name,
                    description: p.description
                };
            });


            restaurantTable = await Restaurant.findAll();

            
            for (let i = 0; i < info.length; i++) {
              let restaurant = info[i];
                let data = await restaurantTable.find(r => r.id == restaurant.id);
                let category = await categoryTable.find(c => c.name == restaurant.category[0]);
                data.addCategory(category);
            };

            restaurantTable = await Restaurant.findAll({
                include: {
                    model: Categories,
                    attributes: ["name"],
                    through: {
                        attributes: []
                    }
                },
                include: {
                  model: Products,
                  attributes: ["name"],
                  through: {
                      attributes: []
                  }
              },
                order: [
                    ['id', 'ASC']
                ]
            });
            
            return res.send(restaurantTable);
          } catch (error) {
            res.status(404).send(error);
          };
          if (categoryTable.length === 0) return res.send("Please Create Categories First");
      
          let productsTable = await Products.findAll({});
          if (productsTable.length === 0) return res.send("Please Create Productos First");
        } else {
          if (name) {
            const specificRestaurant = await Restaurant.findAll({
                where: {
                    name: { [Op.iLike]: `%${name}%` }
                }
            });

            if (specificRestaurant.length > 0) return res.status(200).send(specificRestaurant);

            return res.status(404).send("No such Product");
        };
    };
};

const getRestaurantById = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status('id is undefined');

  try {
    const { data } = await axios.get(urlFromApi + 'restaurant');
    if (data.length <= 0) throw new Error(data);
    const restaurant = data.find(
      (restaurant) => parseInt(restaurant.id) === parseInt(id)
    );
    if (restaurant.id) {
      return res.send(restaurant);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};


const postRestaurant = async (req, res) => {
  let {
      name,
      reviews,
      photo,
      description,
      category,
      productos,
  } = req.body;

  let exists = await Restaurant.findOne({
      where: { name: name }
  })

  if (exists) return res.status(406).send("El restaurante ya existe")

  let restaurantCreate = await Restaurant.create({
    name,
    reviews,
    photo,
    description,
  });

  let categoryDB = await Categories.findAll({
      where: { name: category }
  });

  let productDB = await Products.findAll({
      where: { name: productos }
  })

  await restaurantCreate.addCategories(categoryDB);
  await restaurantCreate.addProducts(productDB);

  res.status(201);
}


module.exports = {
  getRestaurants,
  getRestaurantById,
  postRestaurant,
};
