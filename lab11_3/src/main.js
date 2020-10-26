// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);


import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

import './style.css';

const App = () => {
  const [number, setNumber] = useState(getRandom(1, 1000));
  const [guessedNumber, setGuessedNumber] = useState();
  const [message, setMessage] = useState('');
  return (
    <div id="app-container">
      <strong>{message}</strong><br></br>
      <label>The number is????</label><br></br>
      <input value={guessedNumber} onChange={e => onChange(e.target.value)} />
     
    </div>
  );

  function onChange(guess) {
    if (guess == number) {
      setMessage('YOU GOT IT');
      return;
    }

    if (guess > number) {
      (getRandom(0, 100) < 50) ? setMessage('the number is smaller') : setMessage('[FAKE] the number is bigger');
    } else {
      (getRandom(0, 100) < 50) ? setMessage('the number is bigger') : setMessage('[FAKE] the number is smaller'); 
    }

    setGuessedNumber(guess);
  }

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);