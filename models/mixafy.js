'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mixafy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  mixafy.init({
    artist: DataTypes.STRING,
    song: DataTypes.STRING,
    shared_link: DataTypes.STRING,
    embed_link: DataTypes.STRING,
    genre_id: DataTypes.STRING,
    createdat: DataTypes.DATE,
    updatedat: DataTypes.DATE

  }, {
    sequelize,
    modelName: 'mixafy',
  });
  return mixafy;
};