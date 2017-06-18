let timer = 60;

export const start = (dispatch) => {
  // clearInterval(timer);
  // timer = setInterval(() => dispatch(tick()), 1000);
  
  dispatch({ type: 'START_TIMER' });
  // dispatch(tick())
}

// export const tick = () => ({
//   type: 'TIMER_TICK'
// });

export const stop = () => {
  clearInterval(timer);
  return { type: 'STOP_TIMER' }
}

