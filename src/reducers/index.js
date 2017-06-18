import { combineReducers } from 'redux';
import timer from './timer'
import stopwatch from './stopwatch'


const rootReducer = combineReducers({
  stopwatch
})

 export default rootReducer;