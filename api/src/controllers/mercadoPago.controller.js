const mercadopago = require("mercadopago");
require("dotenv").config();
const { Products } = require("../db");
const { ACCESS_TOKEN } = process.env;
const ruta_local = process.env.FRONT_URL || "http://localhost:3000/";

const crearOrden = async (req, res) => {
  //   const { quantity, priceTotal, id } = req.body;
  const { data } = req.body;
  console.log(data, "los productos comprados");
  mercadopago.configure({
    access_token: ACCESS_TOKEN,
  });

  //PARAMETROS A LLENAR CON LA USER INFO
  // payer: {
  //   name: "",
  //   surname: "",
  //   email: "",
  //   phone: {
  //     area_code: "",
  //     number: "",
  //   },
  //   identification: {
  //     type: "DNI",
  //     number: "",
  //   },
  //   address: {
  //     zip_code: "",
  //     street_name: "",
  //     street_number: "",
  //   },
  //   date_created: "",
  // },

  let preference = {
    items: [],
    back_urls: {
      success: `${ruta_local}`, //ver ${ruta_local}${id}?purchasedQuantity=${quantity}
      failure: `${ruta_local}`,
      pending: `${ruta_local}`,
    },

    auto_return: "approved",
    payment_methods: {
      installments: 1,
    },
  };
  data.forEach((el) =>
    preference.items.push({
      title: el.name,
      quantity: el.quantity,
      currency_id: "ARS",
      unit_price: el.price,
    })
  );
  //Esto busca el producto por id y le modifica el stock en base a lo que recibe

  console.log(preference.items, "la preferencia modificada");
  mercadopago.preferences
    .create(preference)
    .then(async (response) => {
      console.log(response, "LA RESPONSE");
      data.map(async (el) => {
        const product = await await Products.findByPk(el.id);
        console.log(
          product.quantity,
          product.stock,
          el.quantity,
          "los valores a tener en cuenta"
        );
        product.stock -= el.quantity;
        await product.save();
      });
      res.json(response.body.init_point);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = {
  crearOrden,
};
