'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return queryInterface.createTable('customers',{
    cid :{
    primaryKey:true,
    autoIncrement:true,
    type:Sequelize.INTEGER,
    allowNull:false,
    },
    cname:{
    type:Sequelize.STRING,
    allowNull:false
    },
    phonenum:{
    type:Sequelize.INTEGER,
    allowNull:false
    },
    country :{
    type:Sequelize.ENUM('Bangladesh','india'),
    allowNull:false,
    default :'Bangladesh'

    },
    dateofbirth :{
    type:Sequelize.DATE,
    allowNull:false

    }

    }

    )


  },

  down: (queryInterface, Sequelize) => {

     return queryInterface.dropTable('customers');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
