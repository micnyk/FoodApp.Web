import * as React from "react";
import { Col, Row } from "reactstrap";
import { MenuItemDto } from "../../../dtos/menu/MenuItemDto";
import MenuItem from "../MenuItem";

interface MenuState {
  menuItems: MenuItemDto[];
}

class Menu extends React.Component<{}, MenuState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      menuItems: [
        { id: "1", name: "Test", ordersCount: 1 } as MenuItemDto,
        { id: "2", name: "Inny test", ordersCount: 0 } as MenuItemDto,
        { id: "3", name: "Pierogi", ordersCount: 3 } as MenuItemDto,
        { id: "4", name: "Żurek", ordersCount: 2 } as MenuItemDto
      ]
    } as MenuState;
  }

  render() {
    return (
      <Col md="12">
        <Row>
          {this.state.menuItems.map(menuItem => (
            <Col key={menuItem.id} sm="4">
              <MenuItem menuItem={menuItem} />
            </Col>
          ))}
        </Row>
      </Col>
    );
  }
}

export default Menu;
