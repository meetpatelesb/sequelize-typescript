"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.createTable(
        "Attandences",
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          attendanceType: {
            type: Sequelize.ENUM("TEACHER", "STUDENT"),
            type: Sequelize.STRING,
            allowNull:false,
            //     defaultValue: 'REGISTER',
            //     type: Sequelize.ENUM('REGISTER', 'FORGOT')
          },
          attendanceId: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          attendanceDate: {
            type: Sequelize.DATE,
            allowNull: false,
            type: Sequelize.STRING,
          },

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
      await queryInterface.dropTable("Attandences", { transaction: t });
    });
  },
};
