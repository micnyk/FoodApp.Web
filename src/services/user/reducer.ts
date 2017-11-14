import { reducerWithInitialState } from "typescript-fsa-reducers";
import UserState from "./state";

import { signInHandler, signIn, setSignedIn, setSignedInHandler } from "./actions/signIn";
import { registerHandler, register } from "./actions/register";
import { signOut, signOutHandler } from "./actions/signOut";

export const UserReducer = reducerWithInitialState({ signedIn: false } as UserState)
    .casesWithAction([signIn.started, signIn.done, signIn.failed], signInHandler)
    .casesWithAction([register.started, register.done, register.failed], registerHandler)
    .casesWithAction([signOut.started, signOut.done, signOut.failed], signOutHandler)
    .case(setSignedIn, setSignedInHandler)
    .build();
