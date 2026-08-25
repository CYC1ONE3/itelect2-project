'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
 async up(queryInterface, Sequelize) {
  const now = new Date();

  await queryInterface.bulkInsert("Users", [
    {
      name: "Miguel Santos",
      email: "miguel@tasks.test",
      createdAt: now,
      updatedAt: now,
    },
    {
      name: "Ana Reyes",
      email: "ana@tasks.test",
      createdAt: now,
      updatedAt: now,
    },
    {
      name: "Carlo Cruz",
      email: "carlo@tasks.test",
      createdAt: now,
      updatedAt: now,
    },
  ]);

  const users = await queryInterface.sequelize.query(
    'SELECT id, name FROM "Users";',
    {
      type: Sequelize.QueryTypes.SELECT,
    }
  );

  const idOf = (name) => {
    return users.find((user) => user.name === name).id;
  };

  await queryInterface.bulkInsert("Tasks", [
    {
      title: "Complete GT8",
      dueDate: new Date("2026-08-24"),
      completed: false,
      userId: idOf("Miguel Santos"),
      createdAt: now,
      updatedAt: now,
    },
    {
      title: "Review Sequelize queries",
      dueDate: new Date("2026-08-25"),
      completed: true,
      userId: idOf("Miguel Santos"),
      createdAt: now,
      updatedAt: now,
    },
    {
      title: "Test API in Postman",
      dueDate: new Date("2026-08-25"),
      completed: false,
      userId: idOf("Ana Reyes"),
      createdAt: now,
      updatedAt: now,
    },
    {
      title: "Update README screenshots",
      dueDate: new Date("2026-08-26"),
      completed: false,
      userId: idOf("Ana Reyes"),
      createdAt: now,
      updatedAt: now,
    },
    {
      title: "Submit repository link",
      dueDate: new Date("2026-08-26"),
      completed: false,
      userId: idOf("Carlo Cruz"),
      createdAt: now,
      updatedAt: now,
    },
  ]);
},
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
