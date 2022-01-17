const faker = require('faker');
const getConnection = require('../libs/postgres')
const boom = require('@hapi/boom')|


class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        email: faker.internet.email(),
      });
    }
  }

  async find() {
    const client = await getConnection();
    const response = await client.query('SELECT * FROM public.tasks');
    return response.rows;
  }

  findOne(id) {
    return this.users.find((item) => item.id === id);
  }
  create(data) {
    const newUser = {
      userId: faker.datatype.uuid(),
      ...data,
    };
    this.users.push(newUser);
    return this.users;
  }

  update(id, changes) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('User not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes,
    };
    return this.users[index];
  }

  delete(id) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('User not found');
    }
    // const user = this.users;
    this.users.splice(index, 1);
    return { id };
  }
}

module.exports = UsersService;
