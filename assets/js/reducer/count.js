export default function count(state = {count: 0}, action) {
  let count = state.count;
  switch (action.type) {
    case 'ACTION_INCREMENT_COUNTER':
      return {count: count + action.count};
    case 'ACTION_DECREMENT_COUNTER':
      return {count: count + action.count};
    case 'ADD_EX':
      return {count: count + action.count};
    case 'SHOW_ALERT':
      return {open: action.open};
    default:
      return state;
  }
}
