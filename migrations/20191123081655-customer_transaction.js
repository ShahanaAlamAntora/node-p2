'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return queryInterface.addColumn('transactions','customer_id',{
    type: Sequelize.INTEGER,
    allowNull:false
    }).then(function()
    {
    queryInterface.sequelize.query(
                " ALTER TABLE transactions ADD CONSTRAINT customerFk FOREIGN KEY (customer_id) REFERENCES customers ( cid ) ON DELETE SET NULL ON UPDATE CASCADE; "
            );
    })

  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.removeColumn("transactions", "customer_id").then(function () {
            queryInterface.sequelize.query(
                "ALTER TABLE transactions DROP FOREIGN KEY customerFk;"
            )
        });


    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
