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
      qtyonHand: {
      	field: 'qty_on_hand',
      	type: DataTypes.INTEGER
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  /*Item.associate = (models) => {
    Item.belongsTo(models.itemType);
  };*/

  return Item;
}