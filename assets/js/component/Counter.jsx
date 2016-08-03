import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Mui from '../data/mui';
import AppBar from 'material-ui/AppBar';
import Header from './Header';

export default class CounterComponent extends Component {
  render () {
    const { count, onClickPlus, onClickMinus, onClickHuge, onAlert } = this.props;
    return (
      <MuiThemeProvider muiTheme={Mui}>
        <main>
          <Header onAlert={'test'}/>
          <p><span>Count: {count}</span></p>
          <div>
            <button onClick={onClickPlus}>+1</button>
            <button onClick={onClickMinus}>-1</button>
            <button onClick={onClickHuge}>めっちゃ増える</button>
          </div>
        </main>
      </MuiThemeProvider>
    );
  }
}
