var connection = require('../data_repositories/connection');
var Sequelize = require("sequelize");
var user = require('./users');
var expenseGroup = require('./expenseGroup');
sequelize = connection.getConnection();

var Models = {};
const ExpenseGroupUsers = sequelize.define('ExpenseGroupUsers', {
    GroupId: { type: Sequelize.INTEGER, allowNull: false, references: {
            model: expenseGroup.ExpenseGroup,
            key: 'GroupId',
        }
    },
    UserId: {
        type: Sequelize.INTEGER, 
        allowNull: false, 
        references: {
            model: user.Users,
            key: 'UserId',
        }
    }
});
ExpenseGroupUsers.sync().then(() => {
// Table created
console.log('Expense Group User table Created');
});
Models.ExpenseGroupUsers = ExpenseGroupUsers;
module.exports = Models;