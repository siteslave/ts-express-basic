import * as knex from 'knex';

export class TestModel {

  testData(db: knex) {
    return db('users').select();
  }

  testMessage() {
    return 'Hello world!';
  }

}