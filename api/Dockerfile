FROM node:latest
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]