'use strict';
module.exports = (sequelize, DataTypes) => {
  const country = sequelize.define('country', {
    name: DataTypes.STRING
  }, {
    underscored: true,
  });
  country.associate = models => {
    // associations can be defined here
  };
  return country;
};
