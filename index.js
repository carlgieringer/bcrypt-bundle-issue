const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(myPlaintextPassword, salt);
console.log(`hash: ${hash}`);
