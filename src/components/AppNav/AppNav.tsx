import * as React from "react";
import { Link, withRouter } from "react-router-dom";
import { History } from "history";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem
} from "reactstrap";

interface MenuProps extends React.Props<Menu> {
  history?: History;
  signedIn: boolean;
}

interface MenuState {
  collapsed?: boolean;
}

class Menu extends React.Component<MenuProps, MenuState> {
  constructor(public props: MenuProps) {
    super(props);

    this.state = { collapsed: false } as MenuState;
  }

  render() {
    return (
      <Navbar color="dark" dark={true} expand="md">
        <NavbarBrand
          onClick={() => this.navigateToWelcomeComponent()}
          href="javascript:void(0)"
        >
          Order Food App
        </NavbarBrand>
        <NavbarToggler onClick={() => this.toggleNavbar()} className="mr-2" />
        <Collapse isOpen={this.state.collapsed} navbar={true}>
          {this.props.signedIn ? this.signedInMenu() : this.signedOutMenu()}
        </Collapse>
      </Navbar>
    );
  }

  signedInMenu() {
    return (
      <Nav navbar={true}>
        <NavItem>
          <Link className="nav-link" to="/create">
            Create order
          </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/orders">
            My managed orders
          </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/signout">
            Sign Out
          </Link>
        </NavItem>
      </Nav>
    );
  }

  signedOutMenu() {
    return (
      <Nav navbar={true}>
        <NavItem>
          <Link className="nav-link" to="/join">
            Sign in or register
          </Link>
        </NavItem>
      </Nav>
    );
  }

  toggleNavbar() {
    this.setState({ collapsed: !this.state.collapsed } as MenuState);
  }

  navigateToWelcomeComponent() {
    this.props.history.push("/");
  }
}

export default withRouter(Menu);
