import actionCreatorFactory, { isType } from "typescript-fsa";
import UserState from "../state";
import { RequestResponse, ApiActionMetadata, ApiActionMethod } from "../../api";
import { SignInResult, SignInRequest } from "../";
import { Action } from "redux";

const actionCreator = actionCreatorFactory();

export function signInHandler(state: UserState, action: Action): UserState {
  if (isType(action, signIn.started)) {
    return { ...state, invalidCredentials: false };
  }    

  if (isType(action, signIn.done)) {
    console.log("result from server", action.payload.result);

    const response = action.payload.result.data;

    return { ...state, signedIn: response.success, invalidCredentials: !response.success };
  }

  return { ...state };
}

export const signIn = actionCreator.async<SignInRequest, RequestResponse<SignInResult>>
("USER_SIGNIN", {
  url: "user/signIn",
  method: ApiActionMethod.Post
} as ApiActionMetadata);

export function setSignedInHandler(state: UserState, action: Action): UserState {
  return { ...state, signedIn: true};
}

export const setSignedIn = actionCreator("USER_SETSIGNEDIN");