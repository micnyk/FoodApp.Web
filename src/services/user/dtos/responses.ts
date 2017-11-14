import { UserDto } from "../../../dtos/user/UserDto";

export class SignInResult {
    constructor(
        public success: boolean,
        public user: UserDto
    ) { }
}

export class RegisterResult {
    constructor(
        public id: string,
        public userName: string
    ) { }
}

export class SignOutResult { }