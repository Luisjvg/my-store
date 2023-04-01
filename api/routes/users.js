const UserService = require('../service/user')
const validator = require('../middleware/validator')
const {updateUserSchema, createUserSchema, getUserSchema} = require('../schemas/schemas')

const express = require('express');
const router = express.Router();
const service = new UserService();

// router.get('/', (req, res) =>{
//   const { limit, offset } = req.query;
//   if(limit && offset){
//     res.json({
//       limit,
//       offset
//     })
//   }else{
//       res.send('No hay parametros');
//   }
// })

router.get('/', async (req, res, next) =>{
  try{
    const users = await service.find();
    res.send(users)
  }catch(e){
    next(e)
  }
})

router.get('/:id', async (req, res, next) =>{
  try{
    const { id } = req.params;
    const user = await service.findOne(id);
    res.send(user);
  }catch(e){
    next(e)
  }
})

router.post('/', async (req, res) =>{
  const body = req.body;
  const newUser = await service.create(body)
  res.send(newUser);
})

router.delete('/:id', async (req, res, next) =>{
  try{
    const { id } = req.params;
    const deleteUser = await service.delete(id);
    res.send(deleteUser) ;
  }catch(e){
    next(e)
  }
})

module.exports = router;
