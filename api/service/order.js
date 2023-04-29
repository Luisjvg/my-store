const { models } = require('../libs/sequelize')

class OrderService {
  constructor(){}

  async create(userId){

    const customer = await models.Customer.findOne({
      where: {
        '$user.id$': userId
      },
      include: ['user']
    })
    // return customer;
    const newOrder = await models.Order.create({ customerId: customer.id});
    return newOrder;
  }

  async addItem(data){
    const newItem = await models.OrderProduct.create(data)
    return newItem;
  }

  async findByUser(userId){
    const orders = await models.Order.findAll({
      where: {
        '$customer.user.id$': userId
      },
      include:[
        {
          association: 'customer',
          include: ['user']
        }
      ]
    });
    return orders;
  }

  async find(){
    const orders = await models.Order.findAll({
      include:[
        {
          association: 'customer',
          include: ['user']
        },
        'item'
      ]
    })
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
