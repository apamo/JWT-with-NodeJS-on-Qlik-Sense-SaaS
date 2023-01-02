const jsonWebToken = require("jsonwebtoken");
const fs = require("fs");
const config = require("../config/config");
const { v4: uuidv4 } = require("uuid");

const key = fs.readFileSync("./data/privatekey.pem", "utf8");

const methods = {
    generate: function (sub, name, email, groups = []) {

        // The signingOptions variable is a JSON object providing the information used to verify the JWT and how long the JWT can be used
        // The keyid and issuer come from the JWT identity provider configuration. The algorithm must be set to "RS256" and the audience must be set to "qlik.api/login/jwt-session"
        const signingOptions = {
            "keyid": config.keyid,
            "algorithm": "RS256",
            "issuer": config.issuer,
            "expiresIn": "30s", //Expires 30 seconds after the issue date/time.
            "notBefore": "-30s", //JWT is valid 0 second after the issue date/time.
            "audience": "qlik.api/login/jwt-session"
        };


        // The payload variable is a JSON object containing information describing the user seeking authorization to Qlik Cloud
        // It's possible to send additional claims in the JWT. Today, only the optional claim groups is read
        // Note Depending on the library you use to sign JWTs, you may have to manually assign an iat value to the JWT payload
        const payload = {
            jti: uuidv4().toString(),
            sub: sub,
            subType: "user",
            name: name,
            email: email,
            email_verified: true,
            groups: groups
          };

        // console.log("Signing Options", signingOptions);
        // console.log("Payload", payload);

        const token = jsonWebToken.sign(payload, key, signingOptions);
        return token;
    }
};

module.exports = methods;
