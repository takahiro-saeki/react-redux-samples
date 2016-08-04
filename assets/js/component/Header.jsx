import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class Header extends Component {
  render() {
    const { onDrawer, check, onHide,count } = this.props;
    const sideList = this.props.onSideList.map(list => {
      return (<MenuItem onTouchTap={onHide}>{list.item}</MenuItem>)
    })
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
          open={check}
          onRequestChange={onHide}
        >
        {sideList}
        </Drawer>
      </div>
    )
  }
}
