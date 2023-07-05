"use strict";

const { UpdatedAt } = require('sequelize-typescript');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Complaints",
      [
        {
          complaintType: "TEACHER",
          complaintId: 1,
          complaintDetails: "whiteboard and duster is not it's locations",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          complaintType: "STUDENT",
          complaintId: 3,
          complaintDetails: "one of those students  is bully to my friend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          complaintType: "STUDENT",
          complaintId: 13,
          complaintDetails: "jay is fighting with vishwa in meeting",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          complaintType: "TEACHER",
          complaintId: 5,
          complaintDetails: "tulsi ma'am is fighting with chaprasi zeel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Complaints", null, {});
  },
};
