'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('mixafy', [{
      artist: 'Blink 182',
      song: 'Feeling This',
      shared_link: 'https://open.spotify.com/track/5yWcR25EXM7x0nN9CxD6p6?si=5ff2b7efec9d4c55',
      embed_link: '<iframe src="https://open.spotify.com/embed/track/5yWcR25EXM7x0nN9CxD6p6" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
      genre: 'Pop-Punk',
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});
},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('mixafy', null, {});
  }
};