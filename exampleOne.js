
var questions = require('./questions.js');

questions.askOne({ info:'Enter your name' }, function(result){
	console.log('You name is '+result);
})

