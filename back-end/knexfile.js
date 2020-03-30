// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'ec2-52-207-93-32.compute-1.amazonaws.com',
      database: 'dcaqnno9odtjhd',
      user: 'hyoymeqfuzqljr',
      password: '531f6683b342ff7db16410c5b270d245d1a9ab7e54c81dab3bf8f1d4676f3f66',
      // 'uri': 'postgres://hyoymeqfuzqljr:531f6683b342ff7db16410c5b270d245d1a9ab7e54c81dab3bf8f1d4676f3f66@ec2-52-207-93-32.compute-1.amazonaws.com:5432/dcaqnno9odtjhd',
      ssl: {
        rejectUnauthorized: false //mesma coisa que sslmode=require ou ssl=true
      }
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
