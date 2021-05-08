'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "mixafy",
      [
        {
          artist: "Ace of Base",
          song: "The Sign",
          shared_link:
            "https://open.spotify.com/track/0hrBpAOgrt8RXigk83LLNE?si=39927f4240ea46ca",
          embed_link:
            "https://open.spotify.com/embed/track/0hrBpAOgrt8RXigk83LLNE",
          genre_id: "90's Pop",
          createdat: new Date(),
          updatedat: new Date(),
        },
      ],
      {}
    );
},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('mixafy', null, {});
  }
};