import React from 'react';


const TimerButtons = ({ startOnClick }) => (
  <div>
    {/* // <div>{elasped ? elasped : null}</div> */}
    <button onClick={() => startOnClick()}>Start</button>
    <button>Stop</button>
  </div>
)

export default TimerButtons;