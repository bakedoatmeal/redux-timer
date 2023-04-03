import React from 'react';
import {useSelector} from 'react-redux';
import TimerView from './TimerView';

export default function ListTimers() {
  const timers = useSelector(state => state.timers.value);
  const timerDisplay = timers.map((timer, i) => {
    return (
     <TimerView key={i} name={timer.name} time={timer.time} isRunning={timer.isRunning}/>
    )
  })

  return <>{timerDisplay}</>;
}