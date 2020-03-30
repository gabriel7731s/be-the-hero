const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    // const data = request.body;

    const { name, email, whatsapp, city, uf } = request.body; // é possível obter separadamente cada dado dessa forma

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return response.status(201).json({ id });
  },

  async index(request, response) {
    const ongs = await connection('ongs').select('*');

    // todo: verificação para retornar not found se necessário

    return response.json(ongs);
  }
};
