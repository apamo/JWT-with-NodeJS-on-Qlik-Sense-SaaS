# Introduction


# Prerequisites

## Installing node modules 
```
npm install
```

# Generate a self-signed certificate
This project is running express.js server over HTTPS, so you need to use SSL certificates signed by a publicly trusted certificate authority (CA) or create your own self-signed certificate using openssl:
```
openssl req -nodes -new -x509 -keyout server.key -out server.cert
```
*Source: [Running express.js server over HTTPS](https://timonweb.com/javascript/running-expressjs-server-over-https/)

Make sure the two files server.key and server.cert are in the same root directory of this project as the other files, i.e. server.js or rebuild.js

# Running the server
```
node server.js
```
or
```
npm start
```

# How to implement JWT authorization 

