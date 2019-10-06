module.exports = (sequelize, DataTypes) => {
  const ItemStockDetail = sequelize.define('itemStockDetail', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      type: {
      	type: DataTypes.STRING
      },
      date: {
      	type: DataTypes.DATE
      },
      quantity: {
      	type: DataTypes.INTEGER
      },
      remarks: {
      	type: DataTypes.STRING
      },
      itemId: {
      	field: 'item_id',
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
      // freezeTableName: true,
      timestamps: true,
      underscored: true
    }
  );

  ItemStockDetail.associate = (models) => {
    ItemStockDetail.belongsTo(models.items, {foreignKey: 'item_id'});
  };

  return ItemStockDetail;
}