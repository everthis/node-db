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
//     feedbackSource: 'manual',
//     orderTime: new Date(),
//     orderId: 123
//   })
// }).then(function(data) {
//   console.log(pp(data) )
// });

// db.Case.find({
// 	where: {
// 		feedbackSource: 'manual'
// 	}
// }).then(function(data) {
// 	return data.createCaseLog({
// 		reply: 'another'
// 	})
// }).then(function(data) {
// 	console.log(pp(data) )
// })


db.Case.find({
	where: {
		feedbackSource: 'manual'
	}
}).then(function(data) {
	return db.CaseLog.findAndCountAll({
		where: {
			CaseId: data.id
		},
		order: [["createdAt", "DESC"]],
		limit: 2,
		offset: 1
	})
}).then(function(data) {
	console.log(pp(data) )
})
