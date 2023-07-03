'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert(
        "StudentCourses",
        [
          {
            courseId: 1,
            studentId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            courseId: 1,
            studentId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            courseId: 1,
            studentId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            courseId: 2,
            studentId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            courseId: 2,
            studentId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            courseId: 2,
            studentId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            courseId: 2,
            studentId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            courseId: 3,
            studentId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            courseId: 3,
            studentId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            courseId: 4,
            studentId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            courseId: 4,
            studentId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            courseId: 4,
            studentId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            courseId: 5,
            studentId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            courseId: 5,
            studentId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            courseId: 6,
            studentId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            courseId: 6,
            studentId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          
        ],
        {}
      );
   
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete("StudentCourses", null, {});
    
  }
};
