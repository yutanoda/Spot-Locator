FROM node:14.16
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install
COPY ./ ./
ENTRYPOINT [ "yarn", "start"]

