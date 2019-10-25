'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let customers = [
      {
        "id": 1,
        "name": "The First Distributor",
        "address": "Nowhere",
        "city": "Napoli",
        "state_id": 9,
        "discount": 20,
        "status": 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        "id": 2,
        "name": "The Special One",
        "address": "The Good Road",
        "city": "Buwahahah",
        "state_id": 9,
        "discount": 50,
        "status": 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        "id": 3,
        "name": "The Brilliant One",
        "address": "The Alternate Road",
        "city": "Patna",
        "state_id": 5,
        "discount": 50,
        "status": 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        "id": 4,
        "name": "Kumar Sachin",
        "address": "11539 Park Woods Cir, Suite 701",
        "city": "Alpharetta",
        "state_id": 34,
        "discount": 0,
        "status": 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        "id": 5,
        "name": "Missisystems",
        "address": "1010 CENTER ST",
        "city": "North Sydney",
        "state_id": 5,
        "discount": 8,
        "status": 1,
        created_at: new Date(),
        updated_at: new Date()
      }
    ];

    return queryInterface.bulkInsert('customers', customers);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('customers', null, {});
  }
};
