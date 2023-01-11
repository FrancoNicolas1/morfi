import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

const domian = process.env.REACT_APP_AUTH0_DOMINIAN;
const clienId = process.env.REACT_APP_AUTH0;
console.log(domian);
console.log(clienId);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Auth0Provider
        domain="dev-64ovcrk8gjph4bu4.us.auth0.com"
        clientId="HRnrX5wmEhEbCXwXi721LLv0lRABMYE1"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
