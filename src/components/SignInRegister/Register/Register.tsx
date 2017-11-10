import * as React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class Register extends React.Component {
  render() {
    return (
      <Form>
        <h1 className="mb-5">Register</h1>
        <FormGroup>
          <Label for="userName">User Name:</Label>
          <Input id="userName" />
        </FormGroup>
        <FormGroup>
          <Label for="email">E-mail:</Label>
          <Input id="email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password:</Label>
          <Input id="password" />
        </FormGroup>
        <FormGroup>
          <Button>Register</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default Register;
