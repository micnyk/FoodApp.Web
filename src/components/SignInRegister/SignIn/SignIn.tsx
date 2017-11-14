import * as React from "react";
import { FormGroup, Label, Input, Form, Button } from "reactstrap";
import { connect, Dispatch } from "react-redux";
import { RootState } from "../../..";
import { SignInRequest } from "../../../services/user";
import { signIn } from "../../../services/user/actions/signIn";

interface StateProps {
  invalidCredentials: boolean;
}
interface DispatchProps {
  signIn: (userName: string, password: string) => void;
}

class SignIn extends React.Component<StateProps & DispatchProps> {
  private userName: string;
  private password: string;

  render() {
    return (
      <Form>
        <h1 className="mb-5">Sign In</h1>
        <FormGroup>
          <Label for="userName">User Name:</Label>
          <Input
            id="userName"
            onChange={e => (this.userName = e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password:</Label>
          <Input
            id="password"
            onChange={e => (this.password = e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          {this.props.invalidCredentials ? (
            <div className="has-error">
              <p>User name or password are invalid</p>
            </div>
          ) : null}

          <Button
            onClick={() => this.props.signIn(this.userName, this.password)}
          >
            Sign In
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default connect<StateProps, DispatchProps>(
  (state: RootState) =>
    ({ invalidCredentials: state.user.invalidCredentials } as StateProps),
  (dispatch: Dispatch<RootState>) => {
    return {
      signIn: (userName: string, password: string) =>
        dispatch(
          signIn.started(new SignInRequest(userName, password), {
            actionCreator: signIn // todo: find if there's a better way
          })
        )
    };
  }
)(SignIn);
