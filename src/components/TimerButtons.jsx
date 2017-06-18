import React from 'react';


const TimerButtons = ({ startOnClick, stopOnClick }) => (
  <div>
    {/* // <div>{elasped ? elasped : null}</div> */}
    <button onClick={() => startOnClick()}>Start</button>
    <button onClick={() => stopOnClick()}>Stop</button>
  </div>
)

export default TimerButtons;