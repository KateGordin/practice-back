"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "Born and raised in Philly",
          description: "How I became who am I",
          backgroundColor: "#ffffff",
          color: "#000000",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },

        {
          title: "How I became a programmer",
          description: "How I learned",
          backgroundColor: "#ffffff",
          color: "#000000",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },

        {
          title: "Interesting story",
          description: "How and why",
          backgroundColor: "#ffffff",
          color: "#000000",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
