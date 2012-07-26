# questions.js

*Interactive shell for your node.js cli apps!*

questions.js is a minimal interface to ask interactive questions in the terminal

## Install
```bash
$ npm install questions
```

---

## Examples
Ask one question: (exampleOne.js)
```js
var questions = require('questions');

questions.askOne({ info:'Enter your name' }, function(result){
  console.log('You name is '+result);
})
```

```bash
$ node exampleOne.js 
  Enter your name: Hugo
  You name is Hugo

```

---

Ask multiple questions: (exampleMany.js)
```js
var questions = require('questions');

questions.askMany({
	name: { info:'Name'},
	age: { info:'Age'},
	phone: { info:'Phone', required: false },
}, function(result){
	console.log(result);
})
```

```bash
$ node exampleMany.js 
  Name: Hugo
  Age: 28
  (Optional) Phone: 00351930000000
  { name: 'Hugo', age: '28', phone: '00351930000000' }
```


---
## License 

(The MIT License)

Copyright (c) 2012, Hugo Rodrigues <correio@hugorodrigues.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.