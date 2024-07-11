"use client";
import React from "react";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./components/store";

function page() {
  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
}

export default page;
