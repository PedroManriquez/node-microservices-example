'use strict';
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
	const login = sequelize.models.login;
	const user = sequelize.define('user',
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					strLength (value) {
						if (value.length <= 2) throw new Error('Name contains two or more characters!');
					}
				}
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: true
				}
			},
			country_id: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
		},
		{
			indexes: [
				{
					unique: true,
					fields: ['email']
				}
			],
			underscored: true
		}
	);

	user.associate = models => {
		// associations can be defined here
		user.belongsTo(models.country, {
			foreignKey: 'country_id',
			onDelete: 'CASCADE'
		});
	};

	user.register = (payload) => {
		return sequelize.transaction()
			.then(t => user
				.create(payload, { transaction: t })
				.then(u => login
					.create({
						username: payload.email,
						password: bcrypt.hashSync(payload.password, 10),
						password_confimation: bcrypt.hashSync(payload.password_confimation, 10),
						user_id: u.dataValues.id
					}, { transaction: t })
				)
				.then(result => {
					t.commit();
					return result;
				})
				.catch(err => {
					console.log(err);
					
					t.rollback();
					return err;
				})
			);
	};

	return user;
};
