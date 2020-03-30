exports.up = function(knex) { //método up é responsável por criar a tabela
  return knex.schema.createTable('ongs', function (table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) { //método down é responsável por voltar atrás da criação da tabela, caso haja algum problema
  return knex.schema.dropTable('ongs');
};
