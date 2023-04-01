const { models } = require('../libs/sequelize')

class OrderService {
  constructor(){}

  async create(data){
   const newOrder = await models.Order.create(data);
   return newOrder
  }

  async addItem(data){
    const newItem = await models.OrderProduct.create(data)
    return newItem;
  }

  async find(){
    const orders = await models.Order.findAll()
    return orders;
  }

  async findOne(id){
    const order = await models.Order.findByPk(id , {
      include: [{
        association: 'customer',
        include: ['user']
      },
      'item'
    ]
    });
    return order;
  }

  async update(id, change){
  }

  async delete(id){
  }
}

module.exports = OrderService;
