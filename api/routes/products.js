const express = require('express');
const ProductsService = require('../service/product')
const validator = require('../middleware/validator')
const { createProductSchema, updateProductSchema, getProductSchema} = require('../schemas/schemas')

const router = express.Router();
const service = new ProductsService()


router.get('/', async (req, res) =>{
  const products = await service.find();
  res.json(products);
});

router.get('/filter', (req, res) =>{
  res.send('Yo soy un filter')
})

router.get('/:id',
validator(getProductSchema, 'params'),
async (req, res, next) =>{
  try{
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  }catch(err){
    next(err);
  }

})

router.post('/',
validator(createProductSchema, 'body'),
async (req, res) =>{
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct)
})

router.patch('/:id',
validator(getProductSchema, 'params'),
validator(updateProductSchema, 'body'),async (req, res, next) =>{
  try{
    const { id } = req.params;
    const body = req.body;
    const productUpdate = await service.update(id, body)
    res.json(productUpdate)
  }catch(err){
    next(err);
  }
})
router.delete('/:id', async (req, res) =>{
  const { id } = req.params;
  const productDelete = await service.delete(id)
  res.json(productDelete)
})



module.exports = router;
