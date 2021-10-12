const faker = require('faker');

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        userId: faker.datatype.uuid(),
        name: faker.name.firstName(),
        email: faker.internet.email(),
      });
    }
  }

  find() {
    return this.users;
  }

  findOne(id) {
    return this.users.find((item) => item.id === id);
  }
  create() {}

  update() {}
}

module.exports = UsersService;
