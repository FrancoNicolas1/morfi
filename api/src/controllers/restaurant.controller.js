const axios = require('axios');
const {Restaurant} = require('../db.js')


const getRestaurants = async () => {
  const promise = require('../info/RestInfo.json');
  const restaurants = promise.map((ele)=>{
      return {
          name: ele.name,
          reviews: ele.reviews[0],
          photo: ele.photo,
          products: ele.products.map(e => e.name),
          categories: ele.category? ele.category[0].name: "None",
          descriptions: ele.description,
      }
  })

  return restaurants;
};

const allRestaurants = async (req, res) => {
  try {
    const { name } = req.query;
    let restaurants = await Restaurant.findAll({
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

    if ( !restaurants.length && !name ) {
      try {
          const response = await getRestaurants();
          const subiraDb = await Restaurant.bulkCreate( response );
          res.status( 200 ).send( subiraDb );

      } catch ( error ) {
          console.log( 'error primer condicional', error )
      }
  }

  if ( name && restaurants.length ) {
    try {
        const restaurant = await Restaurant.findAll( {
            where: {
                name: name 
            },
            include: [{
                model: Products,
                attributes: ["name", "price", "photo"],
                through: { attributes: [] }
            }]
        } )

         restaurant.length ? res.status( 200 ).send( restaurant ) :
            res.status( 400 ).send( "Restaurant not found" )

    } catch ( error ) {
        console.log( 'error en segundo condicional', error )
    }

  }

  if ( !name && restaurants.length ) {
    res.status( 200 ).send( restaurants )
  }

  } catch (error) {
    console.log(error, 'error en getRestaurants');
  }
}

const getById = async ( req, res ) => {
  let { id } = req.params;
  id = id.toUpperCase()
  try {
      const restaurant = await Restaurant.findByPk( id,
          {
              include: [{
                  model: Products,
                  attributes: ["name", "photo", "price"],
                  through: { attributes: [] }
              }],
              include: [{
                model: Categories,
                attributes: ["name"],
                through: { attributes: [] }
            }],
          } )
      res.status( 200 ).send( restaurant )
  } catch ( error ) {
      console.log( 'error en getById', error )
  }
} 
 
const putRestaurant = async (req, res) => {
  const selectedRestaurant = await Restaurant.findOne({
      where: {
          id: req.params.id
      }
  });
  if (selectedRestaurant) {
      let data = { ...req.body };

      let keys = Object.keys(data);

      keys.forEach(k => {
          selectedRestaurant[k] = data[k];
      });

      await selectedRestaurant.save();
      res.status(200).send("Restaurante actualizado");
  } else {
      res.status(404).send("Error en put Restaurante");
  };
};

const deleteRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
      const deletedRestaurant = await Restaurant.findOne({
          where: {
              id: req.params.id
          }
      });
      if (!deletedRestaurant) return 0;
      await Restaurant.destroy({ where: { id: id } });

      return res.status(200);
  }
  catch (err) {
      return res.status(500).send(`Restaurant could not be deleted (${err})`);
  }
};

module.exports = {
  allRestaurants,
  getById,
  putRestaurant,
  deleteRestaurant,
}