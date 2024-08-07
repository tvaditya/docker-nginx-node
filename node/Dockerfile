FROM node:15

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY wait-for-it.sh /usr/src/app/

EXPOSE 3000

CMD ["sh", "wait-for-it.sh", "db:3306", "--", "npm", "start"]
