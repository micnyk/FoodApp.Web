import { ApiAction, RequestResponse, ResponseResult } from "./index";
import { Dispatch } from "redux";
import Axios from "axios";
import { showLoader, hideLoader } from "../app";

export class ApiService {
  private client = Axios.create({
    baseURL: "http://localhost:61219/api/",
    timeout: 600000,
    withCredentials: true
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

        const failedAction = action.meta.actionCreator.failed({
          params: action.payload,
          error: {
            errors: JSON.stringify(error)
          }
        });

        next(failedAction);
      });
  }
}
