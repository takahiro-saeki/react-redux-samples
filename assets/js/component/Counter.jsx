import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Mui from '../data/mui';
import Header from './Header';
import sidebar from '../data/sidebar';

export default class CounterComponent extends Component {
  render () {
    const { count, onClickPlus, onClickMinus, onClickHuge, open, onAlert, onDrawer, onHide, check } = this.props;
    return (
      <MuiThemeProvider muiTheme={Mui}>
        <main>
          <Header
            onDrawer={onDrawer}
            onHide={onHide}
            check={check}
            onSideList={sidebar}
          />
          <p><span>Count: {count}</span></p>
          <div>
            <button onClick={onClickPlus}>+1</button>
            <button onClick={onClickMinus}>-1</button>
            <button onClick={onClickHuge}>めっちゃ増える</button>
            <p onClick={onAlert}>アラート表示</p>
          </div>
        </main>
      </MuiThemeProvider>
    );
  }
}
