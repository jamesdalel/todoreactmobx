import Root from "./root";
import ReactDOM from 'react-dom'
import React from "react";
import StoreProvider from "./context";

ReactDOM.render(<StoreProvider><Root /></StoreProvider>, document.getElementById("app-root"))