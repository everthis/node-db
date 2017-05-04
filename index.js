let db = require('./models/index');
db.Doc.findOne({
	where: {
		content: 'random'
	}
}).then(function (data) {
    console.log(data);
});

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