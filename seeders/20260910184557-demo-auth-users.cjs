"use strict";

const bcrypt = require("bcryptjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    const adminHash = await bcrypt.hash("admin123", 10);
    const memberHash = await bcrypt.hash("member123", 10);

    await queryInterface.bulkInsert("Users", [
      {
        name: "Task Admin",
        email: "admin@tasks.test",
        password: adminHash,
        role: "admin",
        createdAt: now,
        updatedAt: now,
      },
      {
        name: "Task Member",
        email: "member@tasks.test",
        password: memberHash,
        role: "member",
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      "Users",
      {
        email: {
          [Sequelize.Op.in]: [
            "admin@tasks.test",
            "member@tasks.test",
          ],
        },
      },
      {}
    );
  },
};