var conn = require('./connection');
var q = require('q');
var testConnection = function (){
    var defered = q.defer();
    var sequelize = conn.getConnection();
    sequelize.authenticate()
  .then(() => {
        console.log('Connection has been established successfully.');
        defered.resolve(true);
    })
.catch(err=> {
console.error('Unable to connect to the database:', err);
defered.reject(false);
});
return defered;
}
var authenticate = {};
authenticate.testConnection = testConnection;
module.exports = authenticate;

