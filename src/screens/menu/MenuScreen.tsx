import * as React from "react";
import { MenuItemDto } from "../../dtos/menu/MenuItemDto";
import { Col, Row } from "reactstrap";
import MenuItem from "../../components/MenuItem";

interface MenuScreenState {
  menuItems: MenuItemDto[];
}

class MenuScreen extends React.Component<{}, MenuScreenState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      menuItems: [
        { id: "1", name: "Test", ordersCount: 1 } as MenuItemDto,
        { id: "2", name: "Inny test", ordersCount: 0 } as MenuItemDto,
        { id: "3", name: "Pierogi", ordersCount: 3 } as MenuItemDto,
        { id: "4", name: "Żurek", ordersCount: 2 } as MenuItemDto
      ]
    } as MenuScreenState;
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

export default MenuScreen;
