FROM node:latest
WORKDIR /index
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i

CMD ["npm", "run", "start"]