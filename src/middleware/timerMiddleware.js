const timerMiddleware = store => next => action => {
    console.log('i am store: ', store)
  if (action.type === 'START_TIMER') {
    action.interval = setInterval(() => store.dispatch({ type: 'TIMER_TICK', currentTime: 1 }), 1000);
  } else if (action.type === 'STOP_TIMER') {
    clearInterval(action.interval);
  } 
  next(action);
};

export default timerMiddleware