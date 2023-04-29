const express = require('express');
const passport = require('passport')

const AuthService = require('./../service/auth')

const router = express.Router();
const service = new AuthService();

router.post('/login',
  passport.authenticate('local', {session: false}),
  async (req, res) =>{
    const user = req.user;
    res.json(service.signToken(user))
})

router.post('/recovery',
async (req, res) =>{
  const { email } = req.body;
  const rta = await service.sendRecovery(email)
  res.json(rta)
})

router.post('/change-password',
  // validacion
  async (req, res) =>{
    const { token, newPassword } = req.body;
    const rta = await service.changePassword(token, newPassword)
    res.json(rta)
})

module.exports = router;
