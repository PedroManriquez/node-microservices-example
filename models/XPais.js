'use strict';
module.exports = (sequelize, DataTypes) => {
  const pais = sequelize.define('pais', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
		timestamps: false,
		underscored: true
	});
  return pais;
};
