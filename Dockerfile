#FROM node:10.6
#FROM node:10.6-alpine
FROM npendicott/london-ng-fe-deps

WORKDIR /usr/src/app

COPY . /usr/src/app

CMD ng serve --host 0.0.0.0