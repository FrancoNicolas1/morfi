const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Products", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
    },
    restaurantId: {
      type: DataTypes.INTEGER,
      references: {model: "Restaurants", key: "id"}
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
