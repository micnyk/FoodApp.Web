import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  combineReducers,
  createStore,
  Middleware,
  applyMiddleware
} from "redux";
import { Provider } from "react-redux";

import registerServiceWorker from "./registerServiceWorker";
import App from "./components/App/App";

import { UserReducer, UserState } from "./services/user";
import { ApiAction, ApiService } from "./services/api";
import { AppState, AppReducer } from "./services/app";

// todo: move from this file
export interface RootState {
  app: AppState;
  user: UserState;
}

// todo: move from this file
const rootReducer = combineReducers({
  app: AppReducer,
  user: UserReducer
});

// todo: move from this file
const apiService = new ApiService();

// todo: move from this file
const apiMiddleware: Middleware = api => next => action => {
  const apiAction = action as ApiAction;

  if (apiAction.meta != null) {
    apiService.execute(apiAction, next);
  }

  return next(action);
};

// todo: move from this file
const store = createStore(rootReducer, applyMiddleware(apiMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
