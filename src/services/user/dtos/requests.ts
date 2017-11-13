export class SignInRequest {
    constructor(
        public userName: string,
        public password: string) { }
} 

export class RegisterRequest {
    constructor(
        public userName: string,
        public email: string,
        public password: string) { }
} 