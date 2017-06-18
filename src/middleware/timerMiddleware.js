const timerMiddleware = store => next => action => {
    console.log(store);
    if (action.type === 'START_TIMER remove') {
        store.dispatch(
            {
                type: 'START_TIMER',
                payload: setInterval(() => store.dispatch({
                    type: 'TIMER_TICK',
                    currentTime: 1
                }), 1000)
            }
        );
    } else if (action.type === 'STOP_TIMER remove') {
        store.dispatch({ type: 'STOP_TIMER' });
    }
    next(action);
};

export default timerMiddleware