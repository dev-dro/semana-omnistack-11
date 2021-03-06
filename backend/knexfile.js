// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'be_the_hero',
      user:     'mysql',
      password: 'mysql'
    },
    migrations: {
      directory: './src/database/migrations'
    },
  },

  test: {
    client: 'mysql',
    connection: {
      database: 'be_the_hero_test',
      user: 'mysql',
      password: 'mysql'
    },
    migrations: {
      directory: './src/database/migrations'
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
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
      user:     'username',
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
