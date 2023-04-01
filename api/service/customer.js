const { DataRowMessage } = require('pg-protocol/dist/messages');
const { models } = require('../libs/sequelize')

class CustomerService {
  constructor(){}

  async create(data){

    const newCustomer = await models.Customer.create(data, {
      include: ['user']
    });
    return newCustomer;
  }

  async find(){
    const customers = await models.Customer.findAll({
      include: ['user']
    })
    return customers
  }

  async findOne(id){
    const customer = await models.Customer.findByPk(id)
    return customer
  }

  async update(id, change){
    const customer = await this.findOne(id);
    const update = await models.Customer.update(change)
    return update
  }

  async delete(id){
    const customer = await this.findOne(id);
    const deleteCustomer = await customer.destroy()
    return { id }
  }
}

module.exports = CustomerService;
