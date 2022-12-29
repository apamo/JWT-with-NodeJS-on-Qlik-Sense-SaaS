// login types if you want to toggle between interactive and JWT based authentication experiences. This is nice to have as you troubleshoot your code
const loginTypes = {
    INTERACTIVE_LOGIN: 'interactive-login',
    JWT_LOGIN: 'jwt-login'
}

module.exports = {
    loginTypes,
    currentLoginType: loginTypes.JWT_LOGIN,    
 
    // app config. This example focuses on the authorization flow for working with JWTs and Qlik Cloud though. After login in your own portal users are transferred directly to the Cloud Hub.
    qlikWebIntegrationId: "webIntegrationId",
    tenantDomain: "tenantDomain",
    appId: "", // Embedding content from a Qlik Sense application requires knowing the unique identifier for that app on your Qlik Cloud tenant.
    
    // token config
    issuer: "issuer",
    keyid: "keyid"
};