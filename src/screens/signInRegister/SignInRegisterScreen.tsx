import * as React from "react";
import { Row, Col } from "reactstrap";
import SignIn from "../../components/SignIn";
import Register from "../../components/Register";

class SignInRegisterScreen extends React.Component {
  render() {
    return (
      <Row>
        <Col xs="12" md="6" className="mb-5">
          <SignIn />
        </Col>
        <Col xs="12" md="6" className="mb-5">
          <Register />
        </Col>
      </Row>
    );
  }
}

export default SignInRegisterScreen;
