
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
//it component makes the Redux store available to any nested components that need to access the Redux store
import "./index.css";
import App from "./App";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
