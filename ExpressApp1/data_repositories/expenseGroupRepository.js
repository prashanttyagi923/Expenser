var model = require('../model/expenseGroup');
var Sequelize = require('sequelize');

var expenseGroupRepository = {
    findAll: function () {
       return model.ExpenseGroup.findAll().then(group => {
           console.log(group);
           return group;
        });
}
}

module.exports = expenseGroupRepository;