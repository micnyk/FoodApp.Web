import { reducerWithInitialState } from "typescript-fsa-reducers/dist";
import { actionCreatorFactory } from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export interface AppState {
  fetching: boolean;
}

const initialAppState = {
  fetching: false
} as AppState;

export const showLoader = actionCreator("APP_SHOWLOADER");
export const hideLoader = actionCreator("APP_HIDELOADER");

export const AppReducer = reducerWithInitialState(initialAppState)
  .case(showLoader, (state: AppState) => ({ ...state, fetching: true } as AppState))
  .case(hideLoader, (state: AppState) => ({ ...state, fetching: false } as AppState))
  .build();
