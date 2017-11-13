import actionCreatorFactory, { isType } from "typescript-fsa";
import UserState from "../state";
import { RequestResponse, ApiActionMetadata, ApiActionMethod } from "../../api";
import { RegisterRequest, RegisterResult } from "../";
import { Action } from "redux";

const actionCreator = actionCreatorFactory();

export function registerHandler(state: UserState, action: Action): UserState {
    if (isType(action, register.done)) {
        return { ...state, signedIn: true };
    }

    if (isType(action, register.failed)) {
        return { ...state, error: action.payload.error };
    }

    return { ...state };
}

export const register = actionCreator.async<RegisterRequest, RequestResponse<RegisterResult>>(
    "USER_REGISTER",
     { url: "user/register", method: ApiActionMethod.Post } as ApiActionMetadata);
