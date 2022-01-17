const getConnection = require('../libs/postgres');
const boom = require('@hapi/boom');


class UsersService {
  constructor() {}

  async find() {
    const client = await getConnection();
    const res = await client.query('SELECT * FROM public.tasks');
    return res.rows;
  }

  async findOne(id) {
    return { id };
  }
  async create(data) {
    return data;
  }

  async update(id, changes) {
    return { id, changes };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UsersService;
