var Sequelize = require('sequelize');
var sequelize = new Sequelize('node_db', 'dawn_pg', '1qaz2wsx', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 1000
  }
});

var User = sequelize.define('user', {
  userName: Sequelize.STRING,
  role: Sequelize.STRING,
  ext: Sequelize.TEXT
});


var Case = sequelize.define('case', {
  feedbackSource: Sequelize.STRING,
  orderTime: Sequelize.DATE,
  orderId: Sequelize.INTEGER
});

Case.belongsTo(User);
User.hasMany(Case);

// User.sync({force: true}).then(function() {
//   return User.create({
//     userName: 'jim',
//     role: 'master',
//     ext: ''
//   })
// }).then(function(data) {
//   console.log(data)
// })

// User.create({
//   userName: 'sec',
//   role: 'user',
//   ext: ''
// }).then(function(data) {
//   console.log(pp(data))
// })

function pp(obj) {
  return JSON.stringify(obj, null, 2); // spacing level = 2
}

// Case.sync({force: true}).then(function() {
//   return User.find({
//     where: {
//       userName: 'jim'
//     }
//   })
// }).then(function(user) {
//   return user.createCase({
//     feedbackSource: 'offline',
//     orderTime: new Date(),
//     orderId: 123
//   })
// }).then(function(data) {
//   console.log(pp(data) )
// });

User.drop()
// sequelize.drop('cases')

// User.find({
//   where: {
//     userName: 'sec'
//   }
// }).then(function(user) {
//   return user.createCase({
//     feedbackSource: 'online',
//     orderTime: new Date(),
//     orderId: 23456789
//   })
// }).then(function(data) {
//   console.log(pp(data) )
// });


// var Tasks = sequelize.define('task', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     validate: {
//       msg: 'name cannot be null'
//     }
//   },
//   code: {
//     type: Sequelize.STRING,
//     validate: {
//       len: [3, 10]
//     }
//   }
// })

// Tasks.bulkCreate([
//   {name: 'foo', code: '123'},
//   {code: '1234'},
//   {name: 'bar', code: '1'}
// ], { validate: true }).catch(function(errors) {
// 	console.log(errors)
  /* console.log(errors) would look like:
  [
    { record:
    ...
    errors:
      { name: 'SequelizeValidationError',
        message: 'Validation error',
        errors: [Object] } },
    { record:
      ...
      errors:
        { name: 'SequelizeValidationError',
        message: 'Validation error',
        errors: [Object] } }
  ]
  */
// })