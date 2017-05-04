let db = require('./models/index');
db.User.findOne().then(function (user) {
    console.log(user);
});