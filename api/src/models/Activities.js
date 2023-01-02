const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activities', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      defaultValue: null
    },
    review: {
      type: DataTypes.TEXT,
      defaultValue: null
    },
    population: {
      type: DataTypes.TEXT,
      defaultValue: null
    },
    descriptions: {
      type: DataTypes.TEXT,
      defaultValue: null
      },
    price:{
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    season:{
        type: DataTypes.TEXT,
        defaultValue: null 
    }
  });
};
