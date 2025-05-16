// auth.js
import { createAuth0Client } from 'https://cdn.auth0.com/js/auth0-spa-js/2.0/auth0-spa-js.production.esm.js';

const auth0 = await createAuth0Client({
  domain: "jaoulack.us.auth0.com", // <-- substitua
  clientId: "UaJ9AFYht41MRwp4p1jz9Kn92D3FihbL",       // <-- substitua
  authorizationParams: {
    redirect_uri: "https://pedrojaoulack.github.io/Rosetta_Stone/dashboard.html"
  }
});

const loginBtn = document.getElementById("btn-login");
const logoutBtn = document.getElementById("btn-logout");

if (loginBtn) {
  loginBtn.addEventListener("click", () => auth0.loginWithRedirect());
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", () =>
    auth0.logout({ returnTo: "https://pedrojaoulack.github.io/Rosetta_Stone/" })
  );
}

if (window.location.pathname.endsWith("dashboard.html")) {
  const isAuthenticated = await auth0.isAuthenticated();
  if (!isAuthenticated) {
    await auth0.loginWithRedirect();
  }
}
