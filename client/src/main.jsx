import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import store from "./redux/store"
import axios from "axios";



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <IntlProvider locale="en-US" massages={{}}>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  </IntlProvider>
);




// ReactDOM.createRoot(document.getElementById("root")).render(
//   <IntlProvider locale="en-US" massages={{}}>
//     <BrowserRouter>
//       <Auth0Provider
//         domain="dev-p8jpj5dccyqig58k.us.auth0.com"
//         clientId="FsvWNC8mE2wREIIOsDyOeOVTJgdQAQEQ"
//         redirectUri={window.location.origin}
//       >
//         <App />
//       </Auth0Provider>
//     </BrowserRouter>
//   </IntlProvider>
// );
