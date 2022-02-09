const boom = require('@hapi/boom');

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

  async create() {
    const newProduct = await models.Product.create();
    return newProduct;
  }

  async find() {
    const products = await models.Product.findAll();
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
