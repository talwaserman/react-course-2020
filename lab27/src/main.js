import React, { useEffect, useRef } from 'react';
import useSWR from 'swr';

import ReactDOM from 'react-dom';
import { useState } from 'react';

import './style.css';

const App = () => {
  const playerRef = useRef();
  const player = useRef();

  useEffect(() => {
    const options = {
      id: 59777392,
      width: 640,
      loop: true
    };
    player = new Vimeo.Player('vimeo-player', options);

    player.setVolume(0);
 
    player.on('play', function() {
        console.log('played the video!');
    });
  }, []);
  return (
    <div id="app-container">
      <div>vimeo player:</div>
      <div ref={playerRef} id="vimeo-player"></div>
    </div>
  );
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
