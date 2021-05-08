'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mixafy', {
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
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedat: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('mixafy');
  }
};