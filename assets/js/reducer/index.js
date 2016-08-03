/*
import { combineReducers } from 'redux'
import count from './count'
import flag from './flag'

export default combineReducers({
  count,
  flag
})
*/
export default function count(state = {count: 0}, action) {
  let count = state.count;
  switch (action.type) {
    case 'ACTION_INCREMENT_COUNTER':
      return {count: count + action.count};
    case 'ACTION_DECREMENT_COUNTER':
      return {count: count + action.count};
    case 'ADD_EX':
      return {count: count + action.count};
    default:
      return state;
  }
}
