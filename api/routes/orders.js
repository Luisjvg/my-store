const express = require('express');
const OrderService = require('../service/order')
const validator = require('../middleware/validator')
const { getOrderSchema, createOrderSchema, addItemSchema } = require('../schemas/orderSchema');
const passport = require('passport')

const router = express.Router();
const service = new OrderService();

router.get('/',
async (req, res, next) =>{
  try{
    const orders = await service.find();
    res.send(orders);
  }catch(e){
    next(e)
  }
})

router.get('/filter', (req, res) =>{

})

router.get('/:id',
validator(getOrderSchema, 'params'),
async (req, res, next) =>{
  try{
    const { id } = req.params;
    const order = await service.findOne(id)
    res.json(order) ;
  }catch(e){
    next(e)
  }
})

router.post('/',
passport.authenticate('jwt', {session: false}),
async (req, res, next) =>{
  try{
    const body = req.user.sub;
    console.log(body)
    const newOrder = await service.create(body);
    res.status(201).json(newOrder)
  }catch(e){
    next(e)
  }
})

router.post('/add-item',
validator(addItemSchema, 'body'),
async (req, res, next) =>{
  try{
    const body = req.body;
    const newItem = await service.addItem(body);
    res.status(201).json(newItem)
  }catch(e){
    next(e)
  }
})


router.patch('/:id',
async (req, res, next) =>{

})
router.delete('/:id', async (req, res) =>{

})



module.exports = router;

