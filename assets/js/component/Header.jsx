import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class Header extends Component {
  render() {
    const { onDrawer } = this.props;
    return (
      <div>
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={onDrawer}
      />
      <Drawer
        docked={false}
        width={200}
        open={onDrawer}
        onRequestChange={(open) => this.setState({open})}
      >
        <MenuItem onTouchTap={onDrawer}>Menu Item</MenuItem>
        <MenuItem onTouchTap={onDrawer}>Menu Item 2</MenuItem>
      </Drawer>
    </div>
    )
  }
}
