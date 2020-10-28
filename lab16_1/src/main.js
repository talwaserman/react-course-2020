import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ScoreDisplay from './ScoreDisplay';
import MainGame from './MainGame';
import _ from 'lodash';
import './style.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [redLocation, setRedLocation] = useState(9);

  return (
    <div id="app-container">
      <ScoreDisplay score={score} />
      <MainGame
        redLocation={redLocation}
        setRedLocation={setRedLocation}
        setScore={setScore}
      />
    </div>
  );
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
