import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import {BrowserRouter as Router,} from "react-router-dom";
import {createStore} from "redux";

import RootReducer from "./store/RootReducer";
import {Provider} from "react-redux";

const store = createStore(RootReducer)

ReactDOM.render(<Provider store={store}><Router> <App/></Router></Provider>, document.getElementById("root"));
