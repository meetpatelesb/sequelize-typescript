"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.createTable(
        "StudentCourses",
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },

          courseId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: "Courses",
              key: "id",
            },
          },
          studentId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: "Students",
              key: "id",
            },
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
      await queryInterface.dropTable("StudentCourses", { transaction: t });
    });
  },
};
