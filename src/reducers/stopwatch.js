const initialState = {
  elapsed: 60,
  startTime: 60
};


const stopwatch = ( state = initialState, action) => {
  switch (action.type) {
    case 'START_TIMER':
      return Object.assign({}, state);
    case 'TIMER_TICK':
      // return Object.assign({}, state, { elapsed: 60, startTime: startTime--})
    // return {...state, elapsed: state.startTime - 1, startTime: state.startTime --}
     // return Object.assign({}, state, { elapsed: state.startTime - 1 });
    // }
    // }
    case 'STOP_TIMER':
      return state;
    default:
      return state;
  }
};

export default stopwatch