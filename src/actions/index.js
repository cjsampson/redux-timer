
export const start = (dispatch) => {
  dispatch({ type: 'START_TIMER' });
};


export const stop = (dispatch) => {
  dispatch({ type: 'STOP_TIMER' });
};