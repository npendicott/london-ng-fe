#FROM node:10.6
FROM node:10.6-alpine

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#COPY package.json /usr/src/app/package.json
COPY . /usr/src/app

RUN npm install
RUN npm install -g @angular/cli@1.7.1

# add app


# start app
CMD ng serve --host 0.0.0.0