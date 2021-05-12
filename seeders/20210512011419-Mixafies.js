'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Mixafies', [
    {
      
          artist: "Ace of Base",
          song: "The Sign",
          shared_link:
            "https://open.spotify.com/track/0hrBpAOgrt8RXigk83LLNE?si=39927f4240ea46ca",
          embed_link:
            "https://open.spotify.com/embed/track/0hrBpAOgrt8RXigk83LLNE",
          genre_id: "90s_Pop",
          createdat: new Date(),
          updatedat: new Date(),
        },
        {
          artist: "Blink 182",
          song: "Feeling This",
          shared_link:
            "https://open.spotify.com/track/5yWcR25EXM7x0nN9CxD6p6?si=5ff2b7efec9d4c55",
          embed_link:
            "https://open.spotify.com/embed/track/5yWcR25EXM7x0nN9CxD6p6",
          genre_id: "Pop_Punk",
          createdat: new Date(),
          updatedat: new Date(),
        },
        {
          artist: "Blink 182",
          song: "Feeling This",
          shared_link:
            "https://open.spotify.com/track/5yWcR25EXM7x0nN9CxD6p6?si=5ff2b7efec9d4c55",
          embed_link:
            "https://open.spotify.com/embed/track/5yWcR25EXM7x0nN9CxD6p6",
          genre_id: "Pop_Punk",
          createdat: new Date(),
          updatedat: new Date(),
        },
        {
          artist: "Periphery",
          song: "Scarlet",
          shared_link:
            "https://open.spotify.com/track/2fEVeSUmv4vDyiTfXTgPhu?si=55a11c4e92834152",
          embed_link:
            "https://open.spotify.com/embed/track/2fEVeSUmv4vDyiTfXTgPhu",
          genre_id: "Prog",
          createdat: new Date(),
          updatedat: new Date(),
        },
        {
          artist: "the GazettE",
          song: "UNDYING",
          shared_link:
            "https://open.spotify.com/track/2fEVeSUmv4vDyiTfXTgPhu?si=55a11c4e92834152",
          embed_link:
            "https://open.spotify.com/embed/track/1raCu5vPmlk9Xl5rL4w3wd",
          genre_id: "Japanese",
          createdat: new Date(),
          updatedat: new Date(),
        }],{});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Mixafies', null, {});
  }
};

