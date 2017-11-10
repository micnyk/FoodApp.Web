import * as React from "react";
import { MenuItemDto } from "../../dtos/menu/MenuItemDto";
import { Button } from "reactstrap";

interface MenuItemProps extends React.Props<MenuItem> {
  menuItem: MenuItemDto;
}

class MenuItem extends React.Component<MenuItemProps, {}> {
  render() {
    return (
      <div className="menu-item mb-5">
        <span className="mr-3">
          {this.props.menuItem.name} ({this.props.menuItem.ordersCount})
        </span>
        <Button>Order</Button>
      </div>
    );
  }
}

export default MenuItem;
