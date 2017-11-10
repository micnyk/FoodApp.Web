import * as React from "react";
import { Col } from "reactstrap";

class Welcome extends React.Component {
    render() {
        return (
          <Col md="12">
            <h1>Welcome to Food App</h1>
            <h2>Create order or join other's by using order link</h2>
          </Col>
        );
      }
}

export default Welcome;