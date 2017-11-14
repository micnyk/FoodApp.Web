import "./App.css";
import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "reactstrap";
import { RingLoader } from "react-spinners";
import { connect, Dispatch } from "react-redux";
import Cookies from "universal-cookie";

import { RootState } from "../..";

import AppNav from "../AppNav";
import SignInRegister from "../SignInRegister";
import SignOut from "../SignInRegister/SignOut";
import Welcome from "../Welcome";
import Menu from "../Menu";
import { setSignedIn } from "../../services/user/actions/signIn";

interface StateProps {
  fetching: boolean;
}

interface DispatchProps {
  setSignedIn: () => void;
}

class App extends React.Component<StateProps & DispatchProps> {
  cookies = new Cookies();

  componentWillMount() {
    if (this.cookies.get("signedIn")) {
      this.props.setSignedIn();
    }
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
              <Route path="/signout" component={SignOut} />
            </Container>
          </div>
        </div>
      </Router>
    );
  }
}

function mapDispatchToProps<S> (dispatch: Dispatch<S>) {
  return {
    setSignedIn: () => dispatch(setSignedIn())
  } as DispatchProps;
}
export default connect<StateProps, DispatchProps>(
  (state: RootState) => ({ fetching: state.app.fetching } as StateProps),
  mapDispatchToProps
)(App);
