import React from 'react';
import NewTimer from './components/NewTimer';
import ListTimers from './components/ListTimers';
import './App.css';
import throttle from 'lodash/throttle';

function App() {
  return (
    <div className="App">
      <NewTimer />
      <ListTimers />
    </div>
  );
}

export default App;
