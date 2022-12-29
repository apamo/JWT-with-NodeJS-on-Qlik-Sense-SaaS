## Introduction
This article describes how to generate a JSON Web Token (JWT) using NodeJS code (using v18.12.1 at the time of writing this) in order to authenticate automatically a user with Qlik Sense SaaS, thus avoiding an interactive login where users are prompted to present credentials.

## Prerequisites

- Visual Studio Code is installed on your machine to open and customize the code
- Install NodeJS on the developer machine
- Install OpenSSL on the developer machine

## Installation

### Install package dependencies
```
npm install
```

### Generate a self-signed certificate
This project is running express.js server over HTTPS, so you need to use SSL certificates signed by a publicly trusted certificate authority (CA) or create your own self-signed certificate using openssl:
```
openssl req -nodes -new -x509 -keyout server.key -out server.cert
```
*Source: [Running express.js server over HTTPS](https://timonweb.com/javascript/running-expressjs-server-over-https/)

Make sure the two files server.key and server.cert are in the same root directory of this project as the other files, i.e. server.js or rebuild.js

### Running the server
```
node server.js
```
or
```
npm start
```

### Implementing JWT authorization 

[Qlik.dev tutorial](https://qlik.dev/tutorials/implement-jwt-authorization): Follow the steps in this technical tutorial to learn how to configure a web application to create a JWT token and send it to Qlik Cloud to authorize a user to view embedded content from a Qlik Sense application.

[Qlik OEM YouTube video tutorial](): In this video, you're going to use the code example from this github repository, make the necessary configurations in the code to connect and work with your own Qlik Cloud tenant and test JWT authentication to send the user automatically from a custom login page to the Qlik Cloud Hub. this code example is based on the [JWT boilerplate](https://glitch.com/~qlik-cloud-jwt) available in Qlik's Glitch account.

