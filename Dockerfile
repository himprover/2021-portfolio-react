FROM node:14.17.0

RUN npm install -g serve

RUN mkdir ./build

COPY ./build ./build

ENTRYPOINT ["serve", "-s", "build"]