export enum ResponseResult {
    Ok = 1,
    Error,
    ModelNotValid
}

export class RequestResponse<TResponse> {
    responseResult: ResponseResult;
    data: TResponse;
    messages: Array<string>;
}