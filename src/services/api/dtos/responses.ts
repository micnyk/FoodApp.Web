export enum RequestResult {
    Ok = 1,
    Error,
    ModelNotValid
}

export class RequestResponse<TResponse> {
    result: RequestResult;
    data: TResponse;
    messages: Array<string>;
}