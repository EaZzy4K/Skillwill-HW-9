const validator = require('validator');
const isEmail_1 = validator.isEmail('test@test.com'); // true
console.log(isEmail_1)
const isEmail_2 = validator.isEmail('abcDE123'); //false
console.log(isEmail_2)