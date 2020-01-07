/// <reference path="../typings.d.ts" />
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as HttpStatus from 'http-status-codes';

import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as ejs from 'ejs';
import * as express from 'express';
import * as cors from 'cors';

import { Router, Request, Response, NextFunction } from 'express';

// Import routing
import adminRoute from './routes/admin/index';
import memberRoute from './routes/member/index';
import indexRoute from './routes/index';

// configure environment
require('dotenv').config({ path: path.join(__dirname, '../config') });

const app: express.Application = express();

//view engine setup
app.set('views', path.join(__dirname, '../views'));
app.engine('.ejs', ejs.renderFile);
app.set('view engine', 'ejs');

//uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname,'../public','favicon.ico')));

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use(cors());

const api = express.Router();
const admin = express.Router();
const member = express.Router();

// default route
app.use('/', indexRoute);

// api prefix
app.use('/api', api);
api.use('/', indexRoute);

// admin route
api.use('/admin', admin);
admin.use('/', adminRoute);

// member route
api.use('/member', member);
member.use('/', memberRoute);
//error handlers

if (process.env.NODE_ENV === 'development') {
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err.stack);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      ok: false,
      code: HttpStatus.INTERNAL_SERVER_ERROR,
      error: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
    });
  });
}

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(HttpStatus.NOT_FOUND).json({
    ok: false,
    code: HttpStatus.NOT_FOUND,
    error: HttpStatus.getStatusText(HttpStatus.NOT_FOUND)
  });
});

export default app;