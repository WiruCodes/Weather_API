import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import { getConfig } from "./config";

localStorage.setItem("chakra-ui-color-mode", "dark");

const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  authorizationParams: {
    redirect_uri: window.location.origin,
    ...(config.audience ? { audience: config.audience } : null),
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider {...providerConfig}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Auth0Provider>
  </React.StrictMode>
);
