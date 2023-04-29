const passport = require('passport');


const { LocalStrategy } = require('./strategies/localStrategies');
const { JwtStrategy } = require('./strategies/jwtStrategies');

passport.use(LocalStrategy);
passport.use(JwtStrategy);
