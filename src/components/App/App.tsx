import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "reactstrap";

import "./App.css";

import AppNav from "../AppNav";
import SignInRegister from "../SignInRegister";
import Welcome from "../Welcome";
import Menu from "../Menu";

interface AppState {
  signedIn: boolean;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = { signedIn: true } as AppState;
  }

  render() {
    return (
      <Router>
        <div className="App">
          <AppNav signedIn={this.state.signedIn} />

          <div className="content">
            <Container>
              <Route path="/" exact={true} component={Welcome} />
              <Route path="/menu" component={Menu} />
              <Route path="/join" component={SignInRegister} />
            </Container>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
