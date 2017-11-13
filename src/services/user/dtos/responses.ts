export class SignInResponse {
    constructor(
        public signedIn: boolean,
        public userName: string
    ) { }
}