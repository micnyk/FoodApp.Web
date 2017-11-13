import actionCreatorFactory, { isType } from "typescript-fsa";
import UserState from "../state";
import { RequestResponse, ApiActionMetadata, ApiActionMethod } from "../../api";
import { SignInResponse, SignInRequest } from "../";
import { Action } from "redux";

const actionCreator = actionCreatorFactory();

export function signInHandler(state: UserState, action: Action): UserState {
    if (isType(action, signIn.done)) {
        console.log("result from server", action.payload.result);

        const response = action.payload.result.data;

        return { ...state, signedIn: response.signedIn };
    }

    return { ...state };
}

export const signIn = actionCreator.async<SignInRequest, RequestResponse<SignInResponse>>(
    "USER_SIGNIN",
     { url: "start", method:  ApiActionMethod.Get } as ApiActionMetadata);
