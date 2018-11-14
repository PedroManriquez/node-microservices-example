'use strict';
module.exports = (sequelize, DataTypes) => {
  const country = sequelize.define('country', {
    name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isAlpha: true,
				strLength (value) {
					if (value.length <= 2) throw new Error('Name contains two or more characters!');
				}
			}
		}
  }, {
    underscored: true,
  });
  country.associate = models => {
    // associations can be defined here
  };
  return country;
};
