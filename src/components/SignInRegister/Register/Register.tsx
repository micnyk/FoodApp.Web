import * as React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

interface RegisterProps extends React.Props<Register> {
  register: (userName: string, email: string, password: string) => void;
}

interface RegisterState {
  userName: string;
  email: string;
  password: string;
}

class Register extends React.Component<RegisterProps, RegisterState> {
  render() {
    return (
      <Form>
        <h1 className="mb-5">Register</h1>
        <FormGroup>
          <Label for="userName">User Name:</Label>
          <Input
            id="userName"
            onChange={e => this.setState({ userName: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">E-mail:</Label>
          <Input
            onChange={e => this.setState({ email: e.target.value })}
            id="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password:</Label>
          <Input
            onChange={e => this.setState({ password: e.target.value })}
            id="password"
          />
        </FormGroup>
        <FormGroup>
          <Button
            onClick={() =>
              this.props.register(
                this.state.userName,
                this.state.email,
                this.state.password
              )}
          >
            Register
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default Register;
