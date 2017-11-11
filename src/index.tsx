import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import registerServiceWorker from "./registerServiceWorker";
import App from "./components/App/App";

import { UserReducer, UserState } from "./services/user";

export interface RootState {
  user: UserState;
}

const rootReducer = combineReducers({
  user: UserReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
