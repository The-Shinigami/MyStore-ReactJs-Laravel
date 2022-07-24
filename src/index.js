import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/* Redux */
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import currentPageReducer from "./reducers/currentPage";
import isLoggedReducer from "./reducers/isLogged";

const reducer = {
  currentPage: currentPageReducer,
  isLogged: isLoggedReducer
};
const store = configureStore({
  reducer :reducer
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode >
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
