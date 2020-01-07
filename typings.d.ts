import knex = require('knex');

declare global {
  namespace Express {
    export interface Request {
      db: knex;
      decoded: any;
    }
  }
}
