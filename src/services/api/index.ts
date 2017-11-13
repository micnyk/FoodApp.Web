import { Action } from "redux";
import { RequestResult, RequestResponse } from "./dtos/responses";
import { ApiService } from "./apiService";

export { ApiService };
export { RequestResult, RequestResponse };

export enum ApiActionMethod {
    Get = "GET",
    Post = "POST"
}

export interface ApiActionMetadata {
    url: string;
    method: ApiActionMethod;
}

export class ApiAction implements Action {
    type: string;
    payload?: {
        params?: {};
        result?: {};
    };
    meta?: ApiActionMetadata;
}