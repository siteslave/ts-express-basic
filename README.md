# Basic ExpressJS and TypeScript project

## Installation

Node.js version 8.x or latest

```
npm i typescript -g
npm i ts-node -g
npm i pm2 -g
```

```
git clone https://github.com/siteslave/ts-express-basic myApi
cd myApi
npm i
```

## Running

```
cp config.txt config
npm run build
npm start
# or
npm start:watch
```

open browser and go to http://localhost:3000

## PM2

```
pm2 start dist/bin/www.js --name Api
```
