import React from 'react';
import TimerButtons from '../components/TimerButtons';
import { connect } from 'react-redux';
import { start, stop } from '../actions';


const mapStateToProps = (state) => ({
  timeRemaining: state.stopwatch.startTime
})

const mapDispatchToProps = ( dispatch ) => ({
    startOnClick: () => dispatch(start),
    stopOnClick: () => dispatch(stop)
})

const TimerButtonContainer = connect(mapStateToProps, mapDispatchToProps)(TimerButtons);

export default TimerButtonContainer;