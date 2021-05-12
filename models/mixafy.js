'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mixafy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Mixafy.init({
    artist: DataTypes.STRING,
    song: DataTypes.STRING,
    shared_link: DataTypes.STRING,
    embed_link: DataTypes.STRING,
    genre_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mixafy',
  });
  return Mixafy;
};