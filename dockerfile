# Use a multi-stage build to install devDependencies for use with nodemon in development
FROM node:14 as dev

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]

# Use a separate stage for production to avoid including devDependencies
FROM dev as production

ENV NODE_PATH=./build

RUN npm run build

CMD [ "npm", "start" ]