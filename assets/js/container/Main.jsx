import React, {Component} from 'react';
import { connect } from 'react-redux';
import CounterComponent from '../component/Counter';
import {ACTION_INCREMENT_COUNTER, ACTION_DECREMENT_COUNTER, ADD_EX, DRAWER_OPEN,DRAWER_SHOW, DRAWER_REMOVE} from '../action/index';

function mapStateToPropsContainer (state) {
  console.log(state)
  return {
    count: state.count,
    open: state.open,
    check: state.check
  };
}

function mapDispatchToPropsContainer (dispatch) {
  return {
    onClickPlus: () => dispatch(ACTION_INCREMENT_COUNTER),
    onClickMinus: () => dispatch(ACTION_DECREMENT_COUNTER),
    onClickHuge: () => dispatch(ADD_EX),
    onAlert: () => dispatch(DRAWER_OPEN),
    onDrawer: () => dispatch(DRAWER_SHOW),
    onHide: () => dispatch(DRAWER_REMOVE)
  };
}

let Main = connect(
  mapStateToPropsContainer,
  mapDispatchToPropsContainer
)(CounterComponent);

export default Main;
