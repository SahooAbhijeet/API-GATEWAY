FROM node

WORKDIR /developer/nodejs/api-gateway

COPY . . 

RUN npm ci

CMD ["npm", "start"]