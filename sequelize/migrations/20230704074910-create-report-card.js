"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
     await queryInterface.sequelize.transaction(async (t) => {
       await queryInterface.createTable("ReportCards", {
         id: {
           allowNull: false,
           autoIncrement: true,
           primaryKey: true,
           type: Sequelize.INTEGER,
         },
         studentId: {
           allowNull: false,
           type: Sequelize.INTEGER,
           references: {
             model: "Students",
             key: "id",
           },
         },

         maths: {
           type: Sequelize.INTEGER,
         },
         physics: {
           type: Sequelize.INTEGER,
         },
         chemistry: {
           type: Sequelize.INTEGER,
         },
         createdAt: {
           allowNull: false,
           type: Sequelize.DATE,
         },
         updatedAt: {
           allowNull: false,
           type: Sequelize.DATE,
         },
         deletedAt: { type: Sequelize.DATE },
       },{transaction:t});
     });
  },
  async down(queryInterface, Sequelize) {
     await queryInterface.sequelize.transaction(async (t) => {
       await queryInterface.dropTable("ReportCards",{transaction:t});
     });
  },
};
