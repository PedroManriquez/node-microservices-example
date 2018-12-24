'use strict';

module.exports = (sequelize, DataTypes) => {
  const login = sequelize.define('login',
    {
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password_confimation: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      indexes: [
        {
          unique: true,
          fields: ['username']
        }
      ],
      underscored: true
    }
  );

  login.associate = models => {
    login.belongsTo(models.user, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    });
  };

  login.auth = payload => {
    return login.findOne({
      where: { username: payload.username }
    })
    .then(user => {
      bcrypt.compare();
    });
  };

  return login;
};
