'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isAlpha: true,
				strLength (value) {
					if (value.length <= 2) throw new Error('Name contains two or more characters!');
				}
			}
		},
    email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true
			}
		},
		country_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
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
