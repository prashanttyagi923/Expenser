var connection = require('../data_repositories/connection');
var Sequelize = require("sequelize");
sequelize = connection.getConnection();

var Models = {};
const ExpenseType = sequelize.define('ExpenseType', {
    Name: { type: Sequelize.STRING, allowNull: false },
    Detail: { type: Sequelize.STRING, allowNull: true },
    ExpenseTypeId: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true }
});
ExpenseType.sync().then(() => {
    // Table created
    console.log('Expense Type Created');
});
Models.ExpenseGroup = ExpenseGroup;
module.exports = Models;