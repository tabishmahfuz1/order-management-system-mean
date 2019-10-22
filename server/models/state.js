module.exports = (sequelize, DataTypes) => {
  const StateModel = sequelize.define('state', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
      	field: 'name',
      	type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true,
      timestamps: false,
      tableName: 'state_models',
    }
  );

 /* Customer.associate = (models) => {
    Item.belongsTo(models.state);
  };*/

  return StateModel;
}