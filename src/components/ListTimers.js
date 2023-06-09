import React from 'react';
import {useSelector} from 'react-redux';
import TimerView from './TimerView';

export default function ListTimers() {
  const timers = useSelector(state => state.timers.value);
  console.log(timers);

  const timersEl = timers.map((timer, i) => <TimerView key={`timer-${i}`} index={i} {...timer} />)
  return <div>{timersEl}</div>
}