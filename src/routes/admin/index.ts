/// <reference path="../../../typings.d.ts" />

import { Router, Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import { TestModel } from '../../models/test';
import moment = require('moment');

const testModel = new TestModel();

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const db = req.db;
    const result: any = await testModel.testData(db);
    const data: any = result.map((v: any) => {
      v.birthdate = moment(v.birthdate).format('YYYY-MM-DD');
      return v;
    })
    res.send({ ok: true, rows: data, code: HttpStatus.OK });
  } catch (error) {
    console.log(error);
    res.send({ ok: false, error: error.message });
  }
});

export default router;
