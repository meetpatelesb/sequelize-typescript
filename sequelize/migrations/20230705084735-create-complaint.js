"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.createTable(
        "Complaints",
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },

          complaintType: {
            
            type: Sequelize.ENUM("TEACHER", "STUDENT"),
            type: Sequelize.STRING,
            allowNull: false,
          },
          complaintId: { allowNull: false, type: Sequelize.INTEGER },
          complaintDetails: { allowNull: false, type: Sequelize.STRING },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          deletedAt: {
            type: Sequelize.DATE,
          },
        },
        { transaction: t }
      );
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.dropTable("Complaints", { transaction: t });
    });
  },
};
