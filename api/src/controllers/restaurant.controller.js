const axios = require('axios');
const {Restaurant, Categories, Products} = require('../db.js')


const allRestaurantsByJson = async () => {
  const promiseMockApi = require("../Info/RestInfo.json");
  const allRestaurants = promiseMockApi.map((restaurant)=>{
      return {
          name: restaurant.name,
          reviews: restaurant.reviews,
          photo: restaurant.photo,
          products: restaurant.products,
          categories: restaurant.category,
          descriptions: restaurant.description,
      }
  })
  return allRestaurants;
};

const uploadRestaurantsDb= async (req,res) => {
    try {
        const responseByJson = await allRestaurantsByJson();
        const uploadDb = await Restaurant.bulkCreate( responseByJson );
        console.log(uploadDb)
        const dbRestaurants = await Restaurant.findAll() 
        res.send(dbRestaurants)   
    } catch (error) {
        res.send("problemas")
    }
}

// const getById = async ( req, res ) => {
//   let { id } = req.params
//   id = id.toUpperCase()
//   try {
//       const restaurant = await Restaurant.findByPk( id,
//           {
//               include: [{
//                   model: Products,
//                   attributes: ["name", "photo", "price"],
//                   through: { attributes: [] }
//               }],
//               include: [{
//                 model: Categories,
//                 attributes: ["name"],
//                 through: { attributes: [] }
//             }],
//           } )
//       res.status( 200 ).send( restaurant )
//   } catch ( error ) {
//       console.log( 'error en getById', error )
//   }
// } 

// const postRestaurant = async (req, res) => {
//     let {
//         name,
//         reviews,
//         photo,
//         products,
//         description,
//         categories

//     } = req.body;

//     let exists = await Restaurant.findOne({
//         where: { name: name }
//     })

//     if (exists) return res.status(406).send("El producto ya existe")

//     let restaurantCreate = await Restaurant.create({
//         name,
//         reviews,
//         photo,
//         description,
//     });

//     let categoryDB = await Categories.findAll({
//         where: { name: categories }
//     });

//     await restaurantCreate.addCategory(categoryDB);

//     let productsDB = await Products.findAll({
//         where: { name: products }
//     });

//     await restaurantCreate.addCategory(productsDB);
//     res.status(201).send('Restaurante creado');


// }

// const putRestaurant = async (req, res) => {
//   const srestaurantctedRestaurant = await Restaurant.findOne({
//       where: {
//           id: req.params.id
//       }
//   });
//   if (srestaurantctedRestaurant) {
//       let data = { ...req.body };

//       let keys = Object.keys(data);

//       keys.forEach(k => {
//           srestaurantctedRestaurant[k] = data[k];
//       });

//       await srestaurantctedRestaurant.save();
//       res.status(200).send("Restaurante actualizado");
//   } else {
//       res.status(404).send("Error en put Restaurante");
//   };
// };

// const drestaurantteRestaurant = async (req, res) => {
//   const { id } = req.params;
//   try {

//       const drestauranttedRestaurant = await Restaurant.findOne({
//           where: {
//               id: req.params.id
//           }
//       });
//       if (!drestauranttedRestaurant) return 0;
//       await Restaurant.destroy({ where: { id: id } });

//       return res.status(200);
//   }
//   catch (err) {
//       return res.status(500).send(`Restaurant could not be drestaurantted (${err})`);

// };
// }
module.exports = {
//   allRestaurants,
//   getById,
//   postRestaurant,
//   putRestaurant,
//   drestaurantteRestaurant,
uploadRestaurantsDb
}