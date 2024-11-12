'use strict';

const bcript = require('bcrypt')
const dotenv = require('dotenv')
dotenv.config()
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const password = await bcript.hash(String(process.env.USER_PASSWORD_INIT), 10)
    await queryInterface.bulkInsert('usuarios',[{
      rols_idrols: 1,
      name: "Sergio",
      email: "sergio@est.univalle.edu",
      password: password,
    }])
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('Users', { email: 'sergio@est.univalle.edu' }, {});
  }
};
