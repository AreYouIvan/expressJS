const faker = require('faker');
const boom = require('@hapi/boom');

const pool = require('../libs/postgres.pool');

// Here we define all the logic.
// Need to manage all the products.
class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
    this.pool = pool;
    this.pool.on('error',
      (err) => console.error(err));
  }

  async generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return this.products;
  }

  async find() {
    const query = 'SELECT * FROM public.tasks';
    const rta = await this.pool.query(query);
    return rta.rows
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
