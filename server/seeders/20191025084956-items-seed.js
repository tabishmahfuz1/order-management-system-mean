'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let items = [
      {
        "id": 1,
        "item_name": "The Great Item 2",
        "item_price": 90,
        "item_cost": 50,
        "status": false,
        "qty_on_hand": 10,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        "id": 2,
        "item_name": "A test Item",
        "item_price": 98.45,
        "item_cost": 30.5,
        "status": true,
        "qty_on_hand": 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        "id": 3,
        "item_name": "Another test Item",
        "item_price": 198.5,
        "item_cost": 90.5,
        "status": true,
        "qty_on_hand": 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        "id": 4,
        "item_name": "Wiper - Migh just wipe you out!",
        "item_price": 198.45,
        "item_cost": 90.5,
        "status": true,
        "qty_on_hand": 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        "id": 5,
        "item_name": "The New Item",
        "item_price": 700,
        "item_cost": 500,
        "status": true,
        "qty_on_hand": 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        "id": 6,
        "item_name": "The Simple One",
        "item_price": 600,
        "item_cost": 300,
        "status": true,
        "qty_on_hand": 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        "id": 7,
        "item_name": "The Bat",
        "item_price": 400,
        "item_cost": 200,
        "status": true,
        "qty_on_hand": 0,
        created_at: new Date(),
        updated_at: new Date()
      }
    ];
    return queryInterface.bulkInsert('items', items);
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('items', null, {});
  }
};
