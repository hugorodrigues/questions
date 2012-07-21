module.exports = function (){

	var obj = {};

	obj.askMany = function (questions, callback) {

		var response = {};

		var pool = function(){

			for (i in questions)
			{
				obj.askOne( questions[i], function(data){ 
					response[i] = data 
					delete questions[i]
					pool()
				});

				return;
			}

			callback(response);
		}

		pool();
	}

	obj.askOne = function (question, callback) {
		var stdin = process.stdin, 
			stdout = process.stdout

		stdin.resume()
		stdout.write( (question.required == false ? '(Optional) ': '') + question.info + ": ");

		stdin.once('data', function(data) {
			result = data.toString().trim();

			if (question.required != false && result == '') {
				// Ask again
				obj.askOne(question, callback);
			} else {
				// Return result
				stdin.pause();
				callback(result);
			}
		})
	}

	return obj;
}()

