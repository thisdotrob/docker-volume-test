FROM node:8

MAINTAINER Boilerplate <tech.lead@bglgroup.co.uk>

COPY . /build/

WORKDIR /build

RUN npm install --quiet --production

EXPOSE 3000

CMD ["npm", "start"]
