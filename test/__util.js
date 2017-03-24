const util = require('../util.js');

const patch = util.bump('1.1.1', 'patch');
const minor = util.bump('1.1.1', 'minor');
const major = util.bump('1.1.1', 'major');

console.log('patch', patch);
console.log('minor', minor);
console.log('major', major);
