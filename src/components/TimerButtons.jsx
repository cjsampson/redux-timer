import React from 'react';


const TimerButtons = ({ timeRemaining, startOnClick, stopOnClick }) => (
  <div>
    <p>{ timeRemaining }</p>
    <button onClick={() => startOnClick()}>Start</button>
    <button onClick={() => stopOnClick()}>Stop</button>
  </div>
)

export default TimerButtons;