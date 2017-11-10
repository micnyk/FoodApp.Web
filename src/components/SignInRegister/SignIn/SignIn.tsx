import * as React from "react";
import { FormGroup, Label, Input, Form, Button } from "reactstrap";

class SignIn extends React.Component {
  render() {
    return (
      <Form>
        <h1 className="mb-5">Sign In</h1>
        <FormGroup>
          <Label for="userName">User Name:</Label>
          <Input id="userName" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password:</Label>
          <Input id="password" />
        </FormGroup>
        <FormGroup>
          <Button>Sign In</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default SignIn;
