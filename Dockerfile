# The first stage
# Build React static files
FROM node:alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY ./ ./

RUN npm i


CMD ["npm", "run", "start"]
