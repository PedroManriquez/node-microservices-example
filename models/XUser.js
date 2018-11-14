'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
		pais_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
  });
  user.associate = (models) => {
    user.belongsTo(models.pais, {
      foreignKey: 'pais_id',
      onDelete: 'CASCADE'
    });
  };
  return user;
};
