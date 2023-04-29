const { Strategy } = require('passport-local')

const AuthService = require('../../../service/auth')
const service = new AuthService();

const LocalStrategy = new Strategy({
  usernameField: 'email',
  passwordField: 'password'
},
async (email, password, done) =>{
  try{
    const user = await service.getUser(email, password, done)
    done(null, user)
  }catch(e){
    done(e, false)
  }
});

module.exports = { LocalStrategy };
