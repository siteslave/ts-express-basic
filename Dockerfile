FROM keymetrics/pm2:10-alpine

LABEL maintainer="Satit Rianpit <rianpit@gmail.com>"

WORKDIR /home/tsexpress

RUN apk update && apk upgrade && apk add --no-cache alpine-sdk git \
  openssh \
  mysql-client \
  python \
  tzdata \
  build-base \
  libtool \
  autoconf \
  automake \
  gzip \
  g++ \
  make \
  && cp /usr/share/zoneinfo/Asia/Bangkok /etc/localtime \
  && echo "Asia/Bangkok" > /etc/timezone

COPY . .

RUN npm i && npm run build

CMD ["pm2-runtime", "process.json"]
