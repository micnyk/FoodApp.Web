import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

ReactDOM.render(
  <App />,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();