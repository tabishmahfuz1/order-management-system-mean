module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('customer', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
      	field: 'name',
      	type: DataTypes.STRING
      },
      address: {
      	type: DataTypes.STRING
      },
      city: {
      	type: DataTypes.STRING
      },
      stateId: {
      	field: 'state_id',
      	type: DataTypes.INTEGER
      },
      discount: {
      	type: DataTypes.FLOAT
      },
      status: {
        type: DataTypes.BOOLEAN
      },
      createdAt: {
        field: 'created_at',
        type: 'TIMESTAMP'
      },
      updatedAt: {
        field: 'updated_at',
        type: 'TIMESTAMP'
      }
    },
    {
      freezeTableName: true,
      timestamps: true,
      tableName: 'customers',
    }
  );

  Customer.associate = (models) => {
    Customer.belongsTo(models.state);
  };

  return Customer;
}