var path = require('path');
var express = require('express');
var router = express.Router();
var Users = require('../data_repositories/expenseGroupRepository');

/* GET home page. */

//router.get('/', function (req, res) {
//    res.render('expenseGroup', { title: 'Express Group' });
//});
var viewPath = path.join(__dirname, 'views', 'expenseGroup');
router.get('/', function (req, res) {
    //var result = testConn.testConnection();
    return Users.findAll().then(function (users) {
        return res.render(viewPath+'\expenseGroup', { title: 'Express Group', users: users });
    });
});

module.exports = router;