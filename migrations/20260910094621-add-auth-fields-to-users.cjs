"use strict";

const bcrypt = require("bcryptjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.addColumn(
        "Users",
        "password",
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
        { transaction }
      );

      await queryInterface.addColumn(
        "Users",
        "role",
        {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "member",
        },
        { transaction }
      );

      const users = await queryInterface.sequelize.query(
        'SELECT id FROM "Users";',
        {
          type: Sequelize.QueryTypes.SELECT,
          transaction,
        }
      );

      // Existing GT8 sample accounts receive a hashed demo password.
      for (const user of users) {
        const hash = await bcrypt.hash("member123", 10);

        await queryInterface.bulkUpdate(
          "Users",
          { password: hash },
          { id: user.id },
          { transaction }
        );
      }

      await queryInterface.changeColumn(
        "Users",
        "password",
        {
          type: Sequelize.STRING,
          allowNull: false,
        },
        { transaction }
      );

      await queryInterface.changeColumn(
        "Users",
        "email",
        {
          type: Sequelize.STRING,
          allowNull: false,
        },
        { transaction }
      );

      await queryInterface.addConstraint("Users", {
        fields: ["email"],
        type: "unique",
        name: "Users_email_unique",
        transaction,
      });
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeConstraint(
        "Users",
        "Users_email_unique",
        { transaction }
      );

      await queryInterface.changeColumn(
        "Users",
        "email",
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
        { transaction }
      );

      await queryInterface.removeColumn(
        "Users",
        "password",
        { transaction }
      );

      await queryInterface.removeColumn(
        "Users",
        "role",
        { transaction }
      );
    });
  },
};