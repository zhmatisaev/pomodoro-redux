import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { start_time, stop_time, reset_time } from "../../store/action/action";

function StartStop() {
    const dispatch = useDispatch()
  const timerRunning = useSelector(state => state.timerRunning)
  const minuteSecond = useSelector(state => state.minuteSecond)

  
    return (
      <div>
        <button
          onClick={() => {
            timerRunning ? dispatch(stop_time()) : dispatch(start_time());
          }}
        >
          {timerRunning ? "stop" : "continue"}
        </button>
        <button
          onClick={() => {
            dispatch(reset_time());
          }}
        >
          reset
        </button>
      </div>
    );
}

export default StartStop
