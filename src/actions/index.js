
export const start = (dispatch) => {
    dispatch({
      type: 'START_TIMER',
      // payload: setInterval(() => dispatch({
      //     type: 'TIMER_TICK',
      //     currentTime: 1
      // }), 1000)
    });
};

// export const tick = () => ({
//   type: 'TIMER_TICK'
// });

export const stop = (dispatch) => {
   dispatch({ type: 'STOP_TIMER' });
};

