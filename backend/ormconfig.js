require('dotenv').config()
const dir = process.env.NODE_DIST === 'dev' ? 'src' : 'dist'

module.exports = [
  {
    name: 'default',
    type: 'sqlite',
    database: `./${dir}/shared/infra/http/typeorm/database.sqlite`,

    migrations: [`./${dir}/shared/infra/typeorm/migrations/*.{ts,js}`],

    entities: [`./${dir}/modules/**/entities/*.{ts,js}`],
    factories: [`./${dir}/shared/infra/typeorm/factories/*.{ts,js}`],
    seeds: [`./${dir}/shared/infra/typeorm/seeds/*.{ts,js}`],

    cli: {
      migrationsDir: `./${dir}/shared/infra/typeorm/migrations`
    }

  }
]
