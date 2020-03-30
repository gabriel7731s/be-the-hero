const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query; //por default, a page recebe 1 caso não seja passada na quert

    const [count] = await connection('incidents').count(); //como o .count pode retornar um array, utiliza-se o [count] que obtém apenas a primeira posição do array (0)

    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5) //o resultado da conta determina quantos registros serão "pulados"
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
      ]);

    // todo: verificação para retornar not found se necessário    

    response.header('X-Total-Count', count.count); //uma boa prática é retornar o número total de registros no header da response, ao invés de retornar no corpo da requisição

    return response.json({ incidents });
  },

  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connection('incidents')
      .returning('id')
      .insert({
        title,
        description,
        value,
        ong_id
      });

    return response.status(201).json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;

    const ong_id = request.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first(); //não retorna um array, retorna apenas o primeiro registro (essa query é possível ter apenas um resultado)

    if (incident.ong_id != ong_id) { //se o incident a ser excluído não for da ong que está tentando deleta-lo
      return response.status(403).json({ error: 'Operation not permitted.' });
    }

    await connection('incidents').where('id', id).delete();

    return response.status(204).send();
  }
};
