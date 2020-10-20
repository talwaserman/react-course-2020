import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

import './style.css';

const App = () => {
  const [time, setTime] = useState(0);
  return (
    <div id="app-container">
      <label>Hours:</label>
      <input value={unConvert(time, 'h')} onChange={e => setTime(converter(e.target.value, 'h'))}/>
      <br></br>
      <label>Minutes:</label>
      <input value={unConvert(time, 'm')} onChange={e => setTime(converter(e.target.value, 'm'))}/>
      <br></br>
      <label>Seconds:</label>
      <input value={unConvert(time, 's')} onChange={e => setTime(converter(e.target.value, 's'))}/>
      <br></br>
    </div>
  );

  function unConvert(val, identifier) {
    return {
      h: val / 60 / 60,
      m: val / 60,
      s: val
    }[identifier];
  }

  function converter(val, identifier) {
    return {
      h: val * 60 * 60,
      m: val * 60,
      s: val
    }[identifier];
  }
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
