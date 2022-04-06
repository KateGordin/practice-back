"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "One interesting story",
          content: "This is a text-description",
          imageUrl:
            "https://thumbs.dreamstime.com/b/internet-information-technology-businessman-hand-showing-concept-75784736.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },

        {
          name: "Story about internet",
          content: "This will be long story",
          imageUrl:
            "https://image.shutterstock.com/image-photo/woman-use-laptop-smartphone-iot-260nw-594171068.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },

        {
          name: "Kind story",
          content: "This is a story",
          imageUrl:
            "https://image.shutterstock.com/image-photo/hand-touching-screen-icon-throw-260nw-696395281.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 3,
        },

        {
          name: "One day story",
          content: "Very interesting story",
          imageUrl:
            "https://st.depositphotos.com/1062624/4071/i/600/depositphotos_40716309-stock-photo-best-internet-concept-of-global.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },

        {
          name: "Story about mobile",
          content: "About phone it is a story",
          imageUrl:
            "https://www.mfwa.org/wp-content/uploads/2019/02/internet.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
