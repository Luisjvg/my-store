const express = require('express');
const CategoryService = require('../service/caregory')
const validator = require('../middleware/validator');
const passport = require('passport');
const { checkAdminRole, checkRoles } = require('../middleware/auth');

const router = express.Router();
const service = new CategoryService();


router.get('/',
passport.authenticate('jwt', {session: false}),
checkRoles('admin', 'seller', 'customer'),
  async (req, res) =>{
  const category = await service.find();
  res.json(category);
});

router.get('/:id',
passport.authenticate('jwt', {session: false}),
checkRoles('admin', 'seller', 'customer'),
async (req, res, next) =>{
  try{
    const { id } = req.params;
    const category = await service.findOne(id);
    res.json(category);
  }catch(err){
    next(err);
  }

})

router.post('/',
passport.authenticate('jwt', {session: false}),
checkRoles('admin', 'seller'),
async (req, res) =>{
  const body = req.body;
  const newcategory = await service.create(body);
  res.status(201).json(newcategory)
})

router.patch('/:id',
passport.authenticate('jwt', {session: false}),
checkRoles('admin', 'seller'),
async (req, res, next) =>{
  try{
    const { id } = req.params;
    const body = req.body;
    const categoryUpdate = await service.update(id, body)
    res.json(categoryUpdate)
  }catch(err){
    next(err);
  }
})
router.delete('/:id',
passport.authenticate('jwt', {session: false}),
checkRoles('admin', 'seller'), async (req, res) =>{
  const { id } = req.params;
  const categoryDelete = await service.delete(id)
  res.json(categoryDelete)
})



module.exports = router;

