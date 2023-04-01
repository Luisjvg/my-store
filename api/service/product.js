const boom = require('@hapi/boom');
const faker = require('faker');
const { Op } = require('sequelize')

const { models } = require('../libs/sequelize')

class ProductsService{

  constructor(){
  }

  async find(query){
    const options = {
      include: ['category'],
      where: {}
    }
    const { limit, offset } = query;
    if(limit && offset){
      options.limit = limit;
      options.offset = offset;
    }
    const { price } = query;
    if(price){
      options.where.price = price;
    }

    const { priceMin, priceMax } = query;
    if(priceMin && priceMax){
      options.where.price = {
        [Op.gte]: priceMin,
        [Op.lte]: priceMax,
      }
    }

    const rta = await models.Product.findAll(options);
    return rta;
  }
  async generate(){
    const limit = 100;
  for(let i = 0; i < limit; i++){
    this.products.push({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
      isBlock: faker.datatype.boolean(),
    });
  }
  }

  async create(data){
    const newProduct = await models.Product.create(data);
    return newProduct
  }


  async findOne(id){
    const query = `SELECT * FROM tasks WHERE id=${id}`;
    const product = await sequelize.query(query)
    console.log(product)
    // if(!product){
    //   throw boom.notFound('Product not Found')
    // }
    // if(product.isBlock){
    //   throw boom.conflict('Product Blocket')
    // }
    return product.rows;
  }

  async update(id, changes){
    const index = this.products.findIndex(item => item.id === id)
    if(index === -1){
      throw boom.notFound('Product not Found')
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    }
    return this.products[index]
  }

  async delete(id){
    const index = this.products.findIndex(item => item.id === id)
    if(index === -1){
      throw boom.notFound('Product not Found')
    }
    this.products.splice(index, 1)
    return { id }
  }
}

module.exports = ProductsService;
