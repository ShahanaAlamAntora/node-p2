'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

     return queryInterface.createTable('transactions',{
    tid :{
    primaryKey:true,
    autoIncrement:true,
    type:Sequelize.INTEGER,
    allowNull:false
    },
    deposit:{
    type:Sequelize.INTEGER,
    allowNull:false
    },
    withdraw:{
    type:Sequelize.INTEGER,
    allowNull:true
    },
    reference_key:{
    type:Sequelize.STRING(12),
    unique:true,
    allowNull:false

    }
    })
    },


  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('transactions')

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
