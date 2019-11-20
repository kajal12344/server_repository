FROM node 

WORKDIR /app
COPY . .
EXPOSE 2000
CMD node server.js