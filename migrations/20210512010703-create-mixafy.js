'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Mixafies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      artist: {
        type: Sequelize.STRING
      },
      song: {
        type: Sequelize.STRING
      },
      shared_link: {
        type: Sequelize.STRING
      },
      embed_link: {
        type: Sequelize.STRING
      },
      genre_id: {
        type: Sequelize.STRING
      },
      createdat: {
        type: Sequelize.DATE
      },
      updatedat: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Mixafies');
  }
};