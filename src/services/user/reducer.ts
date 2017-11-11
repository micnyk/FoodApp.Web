import { reducerWithInitialState } from "typescript-fsa-reducers";
import UserState from "./state";
import { signIn, signInHandler } from "./actions/signIn";

export const UserReducer = reducerWithInitialState({ signedIn: false } as UserState)
    .case(signIn, signInHandler)
    .build();
