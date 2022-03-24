import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import {
  AuthenticationProvider,
  UserDataProvider,
  FilterProvider,
} from "./Context";

// Call make Server
makeServer();

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <UserDataProvider>
        <AuthenticationProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </AuthenticationProvider>
      </UserDataProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
