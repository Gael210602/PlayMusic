# The first stage
# Build React static files
FROM node:16-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY ./ ./
CMD ["npm", "start"]
