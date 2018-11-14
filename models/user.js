'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
		country_id: DataTypes.INTEGER,
  }, {
    underscored: true,
  });
  user.associate = models => {
    // associations can be defined here
		user.belongsTo(models.country, {
      foreignKey: 'country_id',
      onDelete: 'CASCADE'
    });
  };
  return user;
};
