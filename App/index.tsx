import Root from "./root";
import ReactDOM from 'react-dom'
import React from "react";
import RootStore from "./Store";
import { Provider } from "mobx-react";

ReactDOM.render(<Provider rootStore={new RootStore()}><Root /></Provider>, document.getElementById("app-root"))