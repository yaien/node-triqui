FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./

ENV NODE_ENV=production

RUN npm install

COPY . .

EXPOSE 80

CMD npm start