
var questions = require('./questions.js');


questions.askMany({
	name: { info:'Name'},
	age: { info:'Age'},
	phone: { info:'Phone', required:false },
}, function(result){
	console.log(result);
})
