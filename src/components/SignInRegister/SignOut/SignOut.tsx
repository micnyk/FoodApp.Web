import * as React from "react";
import { Redirect } from "react-router";
import { connect, Dispatch } from "react-redux";
import { signOut } from "../../../services/user/actions/signOut";
import { SignOutRequest } from "../../../services/user/dtos/requests";

interface StateProps {}
interface DispatchProps {
  signOut: () => void;
}

class SignOut extends React.Component<StateProps & DispatchProps> {
  componentWillMount() {
    this.props.signOut();
  }
  
  render() {
    return <Redirect to="/" />;
  }
}

function mapDispatchToProps<S>(dispatch: Dispatch<S>) {
  return {
    signOut: () => dispatch(signOut.started(new SignOutRequest(),
                            { actionCreator: signOut })) // todo: find if there's a better way
  } as DispatchProps;
}

export default connect<StateProps, DispatchProps>(null, mapDispatchToProps)(
  SignOut
);
