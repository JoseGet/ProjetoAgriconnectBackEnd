FROM node:22

RUN npm install -g ts-node nodemon typescript

WORKDIR /app 

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]