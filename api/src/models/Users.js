const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Users', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      defaultValue: null
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    banned: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    created:{
      type:DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  });
};
