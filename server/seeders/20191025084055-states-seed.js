'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('state_models', [{
        "id": 1,
        "name": "ANDAMAN AND NICOBAR ISLANDS"
      },
      {
        "id": 2,
        "name": "ANDHRA PRADESH"
      },
      {
        "id": 3,
        "name": "ARUNACHAL PRADESH"
      },
      {
        "id": 4,
        "name": "ASSAM"
      },
      {
        "id": 5,
        "name": "BIHAR"
      },
      {
        "id": 6,
        "name": "CHATTISGARH"
      },
      {
        "id": 7,
        "name": "CHANDIGARH"
      },
      {
        "id": 8,
        "name": "DAMAN AND DIU"
      },
      {
        "id": 9,
        "name": "DELHI"
      },
      {
        "id": 10,
        "name": "DADRA AND NAGAR HAVELI"
      },
      {
        "id": 11,
        "name": "GOA"
      },
      {
        "id": 12,
        "name": "GUJARAT"
      },
      {
        "id": 13,
        "name": "HIMACHAL PRADESH"
      },
      {
        "id": 14,
        "name": "HARYANA"
      },
      {
        "id": 15,
        "name": "JAMMU AND KASHMIR"
      },
      {
        "id": 16,
        "name": "JHARKHAND"
      },
      {
        "id": 17,
        "name": "KERALA"
      },
      {
        "id": 18,
        "name": "KARNATAKA"
      },
      {
        "id": 19,
        "name": "LAKSHADWEEP"
      },
      {
        "id": 20,
        "name": "MEGHALAYA"
      },
      {
        "id": 21,
        "name": "MAHARASHTRA"
      },
      {
        "id": 22,
        "name": "MANIPUR"
      },
      {
        "id": 23,
        "name": "MADHYA PRADESH"
      },
      {
        "id": 24,
        "name": "MIZORAM"
      },
      {
        "id": 25,
        "name": "NAGALAND"
      },
      {
        "id": 26,
        "name": "ORISSA"
      },
      {
        "id": 27,
        "name": "PUNJAB"
      },
      {
        "id": 28,
        "name": "PONDICHERRY"
      },
      {
        "id": 29,
        "name": "RAJASTHAN"
      },
      {
        "id": 30,
        "name": "SIKKIM"
      },
      {
        "id": 31,
        "name": "TAMIL NADU"
      },
      {
        "id": 32,
        "name": "TRIPURA"
      },
      {
        "id": 33,
        "name": "UTTARAKHAND"
      },
      {
        "id": 34,
        "name": "UTTAR PRADESH"
      },
      {
        "id": 35,
        "name": "WEST BENGAL"
      },
      {
        "id": 36,
        "name": "TELANGANA"
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('state_models', null, {});
  }
};
