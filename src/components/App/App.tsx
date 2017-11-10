import "./App.css";
import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "reactstrap";

import AppNav from "../AppNav";
import SignInRegister from "../SignInRegister";
import Welcome from "../Welcome";
import Menu from "../Menu";

import AppState from "../../state";

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = { signedIn: false } as AppState;
  }

  render() {
    return (
        <Router>
          <div className="App">
            <AppNav signedIn={this.state.signedIn} />

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
