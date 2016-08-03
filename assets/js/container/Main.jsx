import React, {Component} from 'react';
import { connect } from 'react-redux';
import CounterComponent from '../component/Counter';
import {ACTION_INCREMENT_COUNTER, ACTION_DECREMENT_COUNTER, ADD_EX, DRAWER_OPEN, DRAWER_CLOSE} from '../action/index';

function mapStateToPropsContainer (state) {
  return {
    count: state.count
  };
}

function mapDispatchToPropsContainer (dispatch) {
  return {
    onClickPlus: () => dispatch(ACTION_INCREMENT_COUNTER),
    onClickMinus: () => dispatch(ACTION_DECREMENT_COUNTER),
    onClickHuge: () => dispatch(ADD_EX)
  };
}

function drawerFlag(dispatch) {
  return {
    onAlert: () => dispatch(DRAWER_OPEN)
  }
}

let Main = connect(
  mapStateToPropsContainer,
  mapDispatchToPropsContainer
)(CounterComponent);

export default Main;
