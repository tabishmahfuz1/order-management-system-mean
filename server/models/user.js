'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    email: {
    	allowNull: false,
    	unique: true,
    	type: DataTypes.STRING
    },
    // username: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: {
      field: 'created_at',
      type: 'TIMESTAMP'
    },
    updatedAt: {
      field: 'updated_at',
      type: 'TIMESTAMP'
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};