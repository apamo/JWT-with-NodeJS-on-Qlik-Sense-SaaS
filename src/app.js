import { auth } from './auth.js'

(async () => {

  const { config, csrfTokenInfo } =  await auth();

  //Redirect to Qlik Cloud Hub URL with csrf token to avoid the CORS issue when redirecting
  let goto = `https://${config.tenantDomain}/hub/&qlik-csrf-token=${csrfTokenInfo.headers.get("qlik-csrf-token")}`;
  window.open(goto, "_self");
  
})();