import actionCreatorFactory, { isType } from "typescript-fsa";
import UserState from "../state";
import { RequestResponse, ApiActionMetadata, ApiActionMethod } from "../../api";
import { SignInResponse, SignInRequest } from "../";
import { Action } from "redux";

const actionCreator = actionCreatorFactory();

export function signInHandler(state: UserState, action: Action): UserState {
    if (isType(action, signIn.done)) {
        console.log("result from server", action.payload.result);
        return { ...state };
    }

    return { ...state };
}

export const signIn = actionCreator.async<SignInRequest, RequestResponse<SignInResponse>>(
    "USER_SIGNIN",
     { url: "http://get-simple.info/api/start/", method:  ApiActionMethod.Get } as ApiActionMetadata);
