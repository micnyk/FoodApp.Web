import { reducerWithInitialState } from "typescript-fsa-reducers";
import UserState from "./state";

import { signInHandler, signIn } from "./actions/signIn";
import { registerHandler, register } from "./actions/register";

export const UserReducer = reducerWithInitialState({ signedIn: false } as UserState)
    .casesWithAction([signIn.started, signIn.done, signIn.failed], signInHandler)
    .casesWithAction([register.started, register.done, register.failed], registerHandler)
    .build();
