const bcrypt = require('bcrypt')

async function verifyPassword(){
  const myPassword = 'admin 123';
  const hash = '$2b$10$alUbZFuD2wBDT7gfCWFqUe/nPKJyTV8nl2k9/B93Utf339CK79.oG'
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
