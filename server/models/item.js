module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('items', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      itemName: {
      	field: 'item_name',
      	type: DataTypes.STRING
      },
      itemPrice: {
      	field: 'item_price',
      	type: DataTypes.FLOAT
      },
      itemCost: {
      	field: 'item_cost',
      	type: DataTypes.FLOAT
      },
      isActive: {
      	field: 'status',
      	type: DataTypes.BOOLEAN
      },
      qtyOnHand: {
      	field: 'qty_on_hand',
      	type: DataTypes.INTEGER
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
    }
  );

  /*Item.associate = (models) => {
    Item.belongsTo(models.itemType);
  };*/

  return Item;
}