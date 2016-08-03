export default function count(state = {count: 0, open: null, check: false}, action) {
  let count = state.count;
  let open = state.open;
  let check = state.check;
  switch (action.type) {
    case 'ACTION_INCREMENT_COUNTER':
      return {count: count + action.count};
    case 'ACTION_DECREMENT_COUNTER':
      return {count: count + action.count};
    case 'ADD_EX':
      return {count: count + action.count};
    case 'DRAWER_OPEN':
      return Object.assign({}, {count: count}, {open: action.open})
    case 'DRAWER_SHOW':
      return Object.assign({}, {count: count}, {open: action.open}, {check: action.check})
    default:
      return state;
  }
}
