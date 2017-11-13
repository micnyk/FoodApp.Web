import { ApiAction, RequestResponse, ResponseResult } from "./index";
import { Dispatch } from "redux";
import Axios from "axios";
import { showLoader, hideLoader } from "../app";

enum ResultActionType {
  Done = "DONE",
  Error = "ERROR"
}

export class ApiService {
  private client = Axios.create({
    baseURL: "http://localhost:61219/api/",
    timeout: 6000
  });

  execute<S>(action: ApiAction, next: Dispatch<S>) {
    console.log("executing api call", action);

    next(showLoader());

    this.client
      .request({
        method: action.meta.method,
        url: action.meta.url,
        data: action.payload
      })
      .then(response => {
        next(hideLoader());

        const result = response.data as RequestResponse<{ errors?: {} }>;

        if (result != null && result.responseResult === ResponseResult.Ok && result.data.errors == null) {

          const doneAction = action.meta.actionCreator.done({
            params: action.payload,
            result: response.data
          });
          next(doneAction);

        } else if (result.data.errors != null || result.responseResult === ResponseResult.ModelNotValid) {
          const errors = result.data.errors || result.data;

          const failedAction = action.meta.actionCreator.failed({
            params: action.payload,
            error: {
              validation: result.data != null,
              errors: errors
            }
          });

          next(failedAction);

        } else {

          const failedAction = action.meta.actionCreator.failed({
            params: action.payload,
            error: {
              errors: [response.statusText]
            }
          });

          next(failedAction);
        }
      })
      .catch(error => {
        next(hideLoader());

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
