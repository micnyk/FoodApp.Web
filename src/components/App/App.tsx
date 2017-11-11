import "./App.css";
import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "reactstrap";

import AppNav from "../AppNav";
import SignInRegister from "../SignInRegister";
import Welcome from "../Welcome";
import Menu from "../Menu";

class App extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
        <Router>
          <div className="App">
            <AppNav />

            <div className="content">
              <Container>
                <Route path="/" exact={true} component={Welcome} />
                <Route path="/menu/:id" component={Menu} />
                <Route path="/join" component={SignInRegister} />
              </Container>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
