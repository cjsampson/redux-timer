import React from 'react';
import TimerButtons from '../components/TimerButtons';
import { connect } from 'react-redux';
import { start, stop } from '../actions';


const mapStateToProps = (state) => (
  console.log('state from Container: ', state)
// {
//   elapsed: state.stopwatch.elapsed,
// }
)

const mapDispatchToProps = ( dispatch ) => ({
    startOnClick: () => dispatch(start),
    stopOnClick: () => dispatch(stop)
})


const TimerButtonContainer = connect(null, mapDispatchToProps)(TimerButtons);

export default TimerButtonContainer;