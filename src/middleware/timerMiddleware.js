const timerMiddleware = store => next => action => {
    console.log(store);
    if (action.type === 'START_TIMER') {
        store.dispatch(
            {
                type: 'START_INTERVAL',
                payload: setInterval(() => store.dispatch({
                    type: 'TIMER_TICK',
                    currentTime: 1
                }), 1000)
            }
        );
    } else if (action.type === 'STOP_TIMER') {
        store.dispatch({ type: 'STOP_INTERVAL' });
    }else{
        next(action);
    }
};

export default timerMiddleware