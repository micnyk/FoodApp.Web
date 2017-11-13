import { ApiAction, RequestResponse } from "./index";
import { Dispatch } from "redux";
import { SignInResponse } from "../user";
import Axios from "axios";

enum ResultActionType {
  Done = "DONE",
  Error = "ERROR"
}

export class ApiService {
  private client = Axios.create({
    baseURL: "http://get-simple.info/api/",
    timeout: 6000
  });

  execute<S>(action: ApiAction, next: Dispatch<S>) {
    console.log("executing api call", action);

    this.client
      .request({
        method: action.meta.method,
        url: action.meta.url
      })
      .then(response => {
        console.log(response);

        const doneAction = {
          type: this.getResultActionType(action, ResultActionType.Done),
          payload: {
            params: action.payload,
            result: {
              data: response.data
            } as RequestResponse<SignInResponse>
          }
        } as ApiAction;

        next(doneAction);
      })
      .catch(error => {
        console.log(error);

        const errorAction = {
          type: this.getResultActionType(action, ResultActionType.Error)
        } as ApiAction;

        next(errorAction);
      });
  }

  private getResultActionType(
    originalAction: ApiAction,
    resultType: ResultActionType
  ) {
    const type = originalAction.type.substr(
      0,
      originalAction.type.lastIndexOf("_")
    );
    return type + `_${resultType}`;
  }
}
