import "./App.css";
import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "reactstrap";
import { RingLoader } from "react-spinners";
import AppNav from "../AppNav";
import SignInRegister from "../SignInRegister";
import Welcome from "../Welcome";
import Menu from "../Menu";
import { connect } from "react-redux";
import { RootState } from "../..";

interface StateProps {
  fetching: boolean;
}

class App extends React.Component<StateProps> {
  constructor(props: StateProps) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="loader">
            <RingLoader color={"#123abc"} loading={this.props.fetching} />
          </div>

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

export default connect<StateProps>(
  (state: RootState) => ({ fetching: state.app.fetching } as StateProps),
  null
)(App);
