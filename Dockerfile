# The first stage
# Build React static files
FROM node:16-alpine as build

WORKDIR /app/frontend
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
COPY ./ ./
CMD ["yarn", "start"]
