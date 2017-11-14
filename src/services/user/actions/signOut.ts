import { actionCreatorFactory, isType } from "typescript-fsa";
import Cookies from "universal-cookie";
import { SignOutRequest, SignOutResult } from "../";
import { Action } from "redux";
import {
  RequestResponse,
  ApiActionMetadata,
  ApiActionMethod
} from "../../api/";
import UserState from "../state";

const cookies = new Cookies();
const actionCreator = actionCreatorFactory();

export function signOutHandler(state: UserState, action: Action): UserState {
    if (isType(action, signOut.started)) {
        cookies.remove("signedIn");
        return { ...state, signedIn: false };
    }

    return { ...state };
}

export const signOut = actionCreator.async<
  SignOutRequest,
  RequestResponse<SignOutResult>
>("USER_SIGNOUT", {
  url: "user/signOut",
  method: ApiActionMethod.Post
} as ApiActionMetadata);
