# The first stage
# Build React static files
FROM node:17.9.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent

COPY ./ ./
CMD ["npm", "start"]
