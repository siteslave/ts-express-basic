/// <reference path="../../typings.d.ts" />

import * as HttpStatus from 'http-status-codes';
import * as moment from 'moment-timezone';

import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
  const year = moment().get('year') + 543;

  res.send({
    ok: true,
    message: 'Welcome to API server!',
    creator: 'Satit Rianpit <rianpit@gmail.com>',
    server_time: moment().tz('Asia/Bangkok').locale('th').format(`DD MMM ${year} HH:mm:ss`),
    code: HttpStatus.OK
  });
});

export default router;
