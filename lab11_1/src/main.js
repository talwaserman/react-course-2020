import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

import './style.css';

const MultiInput = () => {
  const [inputVal, setInputVal] = useState('type something...');
  return (
    <div id="app-container">
      {[...Array(Number(5)).keys()].map(i => (
        <input
          key={i}
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
        />
      ))}
    </div>
  );
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<MultiInput />, root);
