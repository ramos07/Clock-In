FROM node:12.19.0-alpine3.10

ENV NODE_ENV=production

WORKDIR /urs/src/app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . . 

EXPOSE 5000

CMD ["node","server.js"]