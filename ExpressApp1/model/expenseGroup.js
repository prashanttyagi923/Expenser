var connection = require('../data_repositories/connection');
var Sequelize = require("sequelize");
sequelize = connection.getConnection();
var user = require('./users');
var Models = {};
const ExpenseGroup = sequelize.define('ExpenseGroup', {
    Name: { type: Sequelize.STRING, allowNull: false },
    Detail: { type: Sequelize.STRING, allowNull: true },
    GroupId: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    CreatedBy: {
        type: Sequelize.INTEGER, allowNull: false, references: {
            model: user.Users,
            key: 'UserId',
        }
    }
});
ExpenseGroup.sync({ force: true }).then(() => {
// Table created
    return ExpenseGroup.create({
        Name: 'Katra Group',
        CreatedBy: 1
    });
});
Models.ExpenseGroup = ExpenseGroup;
module.exports = Models;