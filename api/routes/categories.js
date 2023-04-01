const express = require('express');
const CategoryService = require('../service/caregory')
const validator = require('../middleware/validator')

const router = express.Router();
const service = new CategoryService();


router.get('/', async (req, res) =>{
  const category = await service.find();
  res.json(category);
});

router.get('/filter', (req, res) =>{
  res.send('Yo soy un filter')
})

router.get('/:id',
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
async (req, res) =>{
  const body = req.body;
  const newcategory = await service.create(body);
  res.status(201).json(newcategory)
})

router.patch('/:id',
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
router.delete('/:id', async (req, res) =>{
  const { id } = req.params;
  const categoryDelete = await service.delete(id)
  res.json(categoryDelete)
})



module.exports = router;

