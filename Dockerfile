FROM node:16-alpine 

WORKDIR '/app'

COPY package.json .

ENV PORT=3001

RUN npm install

COPY . .

CMD ["npm", "start"]

