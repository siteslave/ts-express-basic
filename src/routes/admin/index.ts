/// <reference path="../../../typings.d.ts" />

import { Router, Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
  res.send({ ok: true, message: 'Admin API!', code: HttpStatus.OK });
});

export default router;
