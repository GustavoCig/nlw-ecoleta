import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

module.exports = {
  development: {
    client:     'pg',
    connection: {
      host:     process.env.DB_HOST,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    },
    migrations: {
      directory: path.resolve(__dirname, 'database', 'migrations')
    },
    seeds:      {
      directory: path.resolve(__dirname, 'database', 'seeds')
    }
  }
};
