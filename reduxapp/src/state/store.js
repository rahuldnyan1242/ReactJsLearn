import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import reducers from "./reducers";
// import { configureStore } from "@reduxjs/toolkit";

const store = createStore(reducers, {}, applyMiddleware(thunk))

// const store = configureStore(reducers, {}, applyMiddleware(thunk));

export default store;