var express = require('express');
var router = express.Router();
var Users = require('../data_repositories/UserRepository');

/* GET home page. */

router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/test', function (req, res) {
    //var result = testConn.testConnection();
    var users = Users.findAll().then(function (users) {
        res.render('users', { title: 'Express Users', users: users });
    });
});

module.exports = router;