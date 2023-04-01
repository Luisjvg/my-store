// const express = require('express');
// const CustomerService = require('../service/customer')
// const validator = require('../middleware/validator')
// const { createCustomerSchema, updateCustomerSchema, getCustomerSchema} = require('../schemas/customerSchema')

// const router = express.Router();
// const service = new CustomerService();

// router.get('/',
// async (req, res, next) =>{
//   try{
//     const customers = await service.find();
//     res.send(customers);
//   }catch(e){
//     next(e)
//   }
// })

// router.get('/:id',
// validator(getCustomerSchema),
// async (req, res, next) =>{
//   try{
//     const { id } = req.params;
//     const customer = await service.findOne(id)
//     res.send(customer);
//   }catch(e){
//     next(e)
//   }
// })

// router.patch('/:id',
// validator(updateCustomerSchema),
// async (req, res, next) =>{
//   try{
//     const { id } = req.params;
//     const { body } = req.body;
//     const updateCustomer = service.update(id, body)
//     res.send(updateCustomer);
//   }catch(e){
//     next(e)
//   }
// })
// router.post('/',
// validator(createCustomerSchema),
// async (req, res, next) =>{
//   try{
//     const body = req.body;
//     const createCustomer = await service.create(body)
//     console.log(body)
//     res.send(createCustomer);
//   }catch(e){
//     next(e)
//   }
// })

// router.delete('/:id', async (req, res, next) =>{
//   try{
//     const { id } = req.params;
//     const deleteCustomer = await service.delete(id);
//     res.send(deleteCustomer)
//   }catch(e){
//     next(e)
//   }
// })

// module.exports = router;
