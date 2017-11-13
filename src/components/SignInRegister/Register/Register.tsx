import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import { RootState } from "../../..";
import { RegisterRequest } from "../../../services/user";
import { register } from "../../../services/user/actions/register";
import { ApiErrorsProps } from "../../ApiErrors";
import { ApiErrors } from "../../ApiErrors/ApiErrors";

interface StateProps extends ApiErrorsProps { }
interface DispatchProps {
  register: (userName: string, email: string, password: string) => void;
}

class Register extends React.Component<StateProps & DispatchProps> {
  private userName: string;
  private email: string;
  private password: string;

  render() {
    return (
      <Form>
        <ApiErrors errors={this.props.errors} />

        <h1 className="mb-5">Register</h1>
        <FormGroup>
          <Label for="userName">User Name:</Label>
          <Input
            id="userName"
            onChange={e => (this.userName = e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">E-mail:</Label>
          <Input onChange={e => (this.email = e.target.value)} id="email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password:</Label>
          <Input
            onChange={e => (this.password = e.target.value)}
            id="password"
          />
        </FormGroup>
        <FormGroup>
          <Button
            onClick={() =>
              this.props.register(this.userName, this.email, this.password)}
          >
            Register
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default connect<StateProps, DispatchProps>(
  (state: RootState) => ({ errors: state.user.error } as StateProps),
  (dispatch: Dispatch<RootState>) => {
    return {
      register: (userName: string, email: string, password: string) =>
        dispatch(
          register.started(new RegisterRequest(userName, email, password), {
            actionCreator: register
          })
        )
    };
  }
)(Register);
