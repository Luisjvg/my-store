const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY4MTM1MDQzOH0.gWLgZw8X-JRZoz20AGnH9I7t4M9Yz2OYzMpmPLRWEps';

function verifyToken(token, secret){
  return jwt.verify(token, secret);
}

const verify = verifyToken(token, secret);
console.log(verify)
