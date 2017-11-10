import * as React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

interface MenuProps extends React.Props<Menu> {
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
        <NavbarBrand href="#">Order Food App</NavbarBrand>
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
          <NavLink href="/">Create order</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">My managed orders</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Sign Out</NavLink>
        </NavItem>
      </Nav>
    );
  }

  signedOutMenu() {
    return (
      <Nav navbar={true}>
        <NavItem>
          <NavLink href="/">Sign in or register</NavLink>
        </NavItem>
      </Nav>
    );
  }

  toggleNavbar() {
    this.setState({ collapsed: !this.state.collapsed } as MenuState);
  }
}

export default Menu;
