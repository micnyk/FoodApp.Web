export class SignInResponse {
    constructor(
        public signedIn: boolean,
        public userName: string
    ) { }
}

export class RegisterResult {
    constructor(
        public id: string,
        public userName: string
    ) { }
}