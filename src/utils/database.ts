import knex = require('knex');
import { MySqlConnectionConfig, PgConnectionConfig } from "knex";

export class Database {

  getMySQLConnection() {
    const connection: MySqlConnectionConfig = {
      host: process.env.DB_HOST || 'localhost',
      port: +process.env.DB_PORT || 3306,
      database: process.env.DB_NAME || 'test',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      // multipleStatements: true,
      debug: false
    }

    return knex({
      client: 'mysql',
      connection: connection,
      pool: {
        min: 0,
        max: 100,
        afterCreate: (conn: any, done: any) => {
          conn.query('SET NAMES utf8', (err: any) => {
            done(err, conn);
          });
        }
      },

    });
  }

  getPostgreSQLConnection() {
    const connection: PgConnectionConfig = {
      host: process.env.DB_HOST || 'localhost',
      port: +process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || 'test',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
    }

    return knex({
      client: 'pg',
      connection: connection,
      pool: {
        min: 0,
        max: 100,
      },
    });
  }

}