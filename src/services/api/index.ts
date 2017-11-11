import { RequestResult, RequestResponse } from "./dtos/responses";

export { RequestResult, RequestResponse };

export enum ApiActionMethod {
    Get,
    Post
}

export interface ApiActionMetadata {
    url: string;
    method: ApiActionMethod;
}