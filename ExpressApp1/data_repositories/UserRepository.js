var model = require('../model/Users');
var Sequelize = require('sequelize');

var userRepository = {
    findAll: function () {
        model.Users.findAll().then(users => {
            console.log(users);
            return users;
        });
}
}

module.exports = userRepository;