var connection = require('../data_repositories/connection');
var Sequelize = require("sequelize");
sequelize = connection.getConnection();
var Models = {};
const User = sequelize.define('User', {
    Name: Sequelize.STRING,
    Email: { type: Sequelize.STRING, unique: true, validate: { isEmail: true } },
    UserId : { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true}
})
User.sync({ force: true }).then(() => {
// Table created
return User.create({
    Name: 'John',
    Email: 'Hancock@gmail.com'
});
});
Models.Users = User;
module.exports = Models;