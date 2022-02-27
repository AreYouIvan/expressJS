const boom = require('@hapi/boom');
const { Op } = require('sequelize')
const { models } = require('../libs/sequelize');
const pool = require('../libs/postgres.pool');

// Here we define all the logic.
// Need to manage all the products.
class ProductsService {
  constructor() {
    this.generate();
    this.pool = pool;
    this.pool.on('error',
      (err) => console.error(err));
  }

  async generate() {

  }

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find(query) {
    const options = {
      include: ['category'],
      where: {}
    }
    const { limit, offset } = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    const { price } = query;
    if ( price ){
      options.where.price = price;
    }
    const { price_min, price_max } = query;
    if (price_min && price_max) {
      options.where.price = {
        [Op.gte]: price_min,
        [Op.lte]: price_max,
      };
    }

    const products = await models.Product.findAll(options);

    return products;
  }

  async findOne(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('Product not available');
    }
    return product;
  }

  // Using spread operators we can avoid errors like replacing everything instead of just one property.

  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }
  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
    // array.splice(position, elements_to_delete_from_position);
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductsService;
