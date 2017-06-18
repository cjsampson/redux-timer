const timer = ( state = {}, action ) => {
  switch (action.type) {
    case 'TIMER_START':
      return state
    case 'TIMER_TICK':
      return state
    case 'TIMER_STOP':
      return state
    default:
      return state
  }
}

export default timer