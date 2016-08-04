export const ACTION_INCREMENT_COUNTER = {
  type: 'ACTION_INCREMENT_COUNTER',
  count: 1 + 10
};

export const ACTION_DECREMENT_COUNTER = {
  type: 'ACTION_DECREMENT_COUNTER',
  count: -1
};

export const ADD_EX = {
  type: 'ADD_EX',
  count: 100
}

//不要かも
export const DRAWER_OPEN = {
  type: 'DRAWER_OPEN',
  open: () => alert('test')
}

export const DRAWER_CLOSE = {
  type: 'DRAWER_CLOSE',
  open: false
}

//ここから必要
export const DRAWER_SHOW = {
  type: 'DRAWER_SHOW',
  check: true
}

export const DRAWER_REMOVE = {
  type: 'DRAWER_REMOVE',
  check: false
}
