var Sequelize = require("sequelize");
const sequelize = new Sequelize('ExpenseTracker', 'sa', 'impossible', {
    dialect: 'mssql',
    host: 'localhost',
    requestTimeout: 30000,
    port: 1433, // Default port
    dialectOptions: {
        instanceName: 'PRASHANTSQL'
    }
});
var connection = {
    
    getConnection: function () {
        return sequelize;
    }
}
module.exports = connection;