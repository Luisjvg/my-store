const { Model, DataTypes, Sequelize } = require('sequelize');

const { CURSTOMER_TABLE } = require('./customerModel')

const ORDER_TABLE = 'orders';

const OrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  customerId:{
    field: 'curstomer_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    reference:{
      model: CURSTOMER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  total:{
    type: DataTypes.VIRTUAL,
    get(){
      if(this.item.length > 0){
        return this.item.reduce((total, item) => {
          return total + (item.price * item.OrderProduct.amount)
        }, 0)
      }
      return 0
    }
  }
}

class Order extends Model{
  static associate(models){
    this.belongsTo(models.Customer, {
      as: 'customer',
    });
    this.belongsToMany(models.Product, {
      as: 'item',
      through: models.OrderProduct,
      foreignKey: 'orderId',
      otherKey: 'productId',
    });
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false,
    }
  }
}

module.exports = {
  ORDER_TABLE,
  OrderSchema,
  Order
}
