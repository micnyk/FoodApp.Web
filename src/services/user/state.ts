export default interface UserState {
    signedIn: boolean;
    invalidCredentials: boolean;
    error?: {};
}