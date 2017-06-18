const initialState = {
    elapsed: 0,
    startTime: 60,
    interval: null,
};


const stopwatch = (state = initialState, action) => {
    switch (action.type) {
        case 'START_INTERVAL':
            return {
                ...state,
                interval: action.payload
            };
        case 'TIMER_TICK':
            // return Object.assign({}, state, { elapsed: 60, startTime: startTime--})
            return {
                ...state,
                elapsed: state.startTime + 1,
                startTime: (state.startTime - 1)
            };
        // return Object.assign({}, state, { elapsed: state.startTime - 1 });
        // }
        // }
        case 'STOP_INTERVAL':
            clearInterval(state.interval);
            return {
                ...state,
                ...initialState
            };
        case 'stop_interval':
        default:
            return state;
    }
};

export default stopwatch