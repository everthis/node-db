let db = require('./models/index');
let sequelize = db.sequelize;

// Sync all models that aren't already in the database
sequelize.sync()

// db.Case.findOne({
// 	where: {
// 		priority: 'random'
// 	}
// }).then(function (data) {
//     console.log(data);
// });

// db.Doc.create({
//   content: 'random',
//   category: 'random',
//   user: {
//     first_name: 'John',
//     last_name: 'jim'
//   }
// }, {
//   include: [ db.User ]
// });

/*
 * pretty print
 */
function pp(obj) {
  return JSON.stringify(obj, null, 2); // spacing level = 2
}

// db.User.sync({force: true}).then(function() {
//   return db.User.create({
//     userName: 'jim',
//     role: 'master',
//     ext: ''
//   })
// }).then(function(data) {
//   console.log(pp(data))
// })

// db.User.create({
//   userName: 'sec',
//   role: 'user',
//   ext: ''
// }).then(function(data) {
//   console.log(pp(data))
// })

// db.User.find({
//     where: {
//       userName: 'jim'
//     }
// }).then(function(user) {
//   return user.createCase({
//     feedbackSource: 'offline',
//     orderTime: new Date(),
//     orderId: 123
//   })
// }).then(function(data) {
//   console.log(pp(data) )
// });

db.User.find({
	where: {
		userName: 'sec'
	}
}).then(function(user) {
	return user.getCases()
}).then(function(data) {
	console.log(pp(data) )
})