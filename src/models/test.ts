import * as knex from 'knex';

export class TestModel {

  testData(db: knex) {
    return db('test').select();
  }

  testMessage() {
      return 'Hello world!';
  }

}