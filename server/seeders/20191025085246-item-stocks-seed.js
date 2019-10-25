'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let itemStockDetails = [{
        "id": 1,
        "type": "OPENING_STOCK",
        "date": new Date(),
        "item_id": 1,
        "quantity": 10,
        "remarks": "OPENING_STOCK",
        created_at: new Date(),
        updated_at: new Date()
      },{
        "id": 2,
        "type": "OPENING_STOCK",
        "date": new Date(),
        "item_id": 2,
        "quantity": 5,
        "remarks": "OPENING_STOCK",
        created_at: new Date(),
        updated_at: new Date()
      }];

    return queryInterface.bulkInsert('item_stock_details', itemStockDetails);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('item_stock_details', null, {});
  }
};
