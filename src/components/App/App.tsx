import * as React from "react";
import { Container } from "reactstrap";

import "./App.css";

import AppNav from "../AppNav/";
import SignInRegisterScreen from "../../screens/signInRegister";
import MenuScreen from "../../screens/menu";

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
      <div className="App">
        <AppNav signedIn={this.state.signedIn} />

        <div className="content">
          <Container>
            {this.state.signedIn 
              ? <MenuScreen /> 
              : <SignInRegisterScreen />}
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
