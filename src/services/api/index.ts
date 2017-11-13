import { Action } from "redux";
import { Success, Failure } from "typescript-fsa";
import { ResponseResult, RequestResponse } from "./dtos/responses";
import { ApiService } from "./apiService";

export { ApiService };
export { ResponseResult, RequestResponse };

export enum ApiActionMethod {
  Get = "GET",
  Post = "POST"
}

export interface ApiActionMetadata {
  url: string;
  method: ApiActionMethod;
  actionCreator: {
    done: (payload: Success<{}, {}>) => Action;
    failed: (payload: Failure<{}, {}>) => Action;
  };
}

export class ApiAction implements Action {
  type: string;
  payload?: {
    params?: {};
    result?: {};
  };
  meta?: ApiActionMetadata;
}
