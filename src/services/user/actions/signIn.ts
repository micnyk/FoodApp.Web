import actionCreatorFactory from "typescript-fsa";
import UserState from "../state";
import { SignInRequest } from "../dtos/requests";

const actionCreator = actionCreatorFactory();

export function signInHandler(state: UserState, request: SignInRequest): UserState {
    console.log(request);
    return { ...state, signedIn: true };
}

export const signIn = actionCreator<SignInRequest>("USER_SIGNIN");
