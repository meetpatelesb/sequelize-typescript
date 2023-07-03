"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.createTable(
        "Teachers",
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          firstname: { type: Sequelize.STRING, allowNull: false },
          lastname: { type: Sequelize.STRING, allowNull: false },
          experiance: { type: Sequelize.INTEGER, allowNull: false },
          classname: { type: Sequelize.STRING, allowNull: false },
          phone: { type: Sequelize.STRING, allowNull: false },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          deletedAt: { type: Sequelize.DATE },
        },
        { transaction: t }
      );
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.dropTable("Teachers",{transaction:t});
    });
  },
};
