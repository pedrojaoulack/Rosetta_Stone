let auth0 = null;

async function initAuth() {
  auth0 = await createAuth0Client({
    domain: "jaoulack.us.auth0.com",
    client_id: "UaJ9AFYht41MRwp4p1jz9Kn92D3FihbL",
    cacheLocation: "localstorage",
    useRefreshTokens: true
  });

  const query = window.location.search;
  if (query.includes("code=") && query.includes("state=")) {
    await auth0.handleRedirectCallback();
    window.history.replaceState({}, document.title, window.location.pathname);
  }
}

async function login() {
  await initAuth();
  await auth0.loginWithRedirect({
    redirect_uri: window.location.origin + "/meu-site/dashboard.html"
  });
}

async function logout() {
  await auth0.logout({
    returnTo: window.location.origin + "/meu-site/"
  });
}
