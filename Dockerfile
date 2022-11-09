FROM node:18.12.1

RUN mkdir /app
WORKDIR /app

RUN npm update -g npm
