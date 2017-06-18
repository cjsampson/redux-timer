const initialState = {
  elapsed: 60,
  startTime: 60
};


const stopwatch = ( state = initialState, action) => {
  console.log('i am from stopWatch reducer')
  switch (action.type) {
    case 'START_TIMER':
      return Object.assign({}, state);
    case 'TIMER_TICK':
      return { 
        ...state, 
        elapsed: state.startTime - 1, 
        startTime: ( state.startTime - 1)
      }
    case 'STOP_TIMER':
      return state;
    default:
      return state;
  }
};

export default stopwatch