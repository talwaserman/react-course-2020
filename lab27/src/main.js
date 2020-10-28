import React from 'react';
import Vimeo from './Vimeo';
import { SWRConfig } from 'swr';
import ReactDOM from 'react-dom';
import StarWarsActor from './StarWarsActor';

import './style.css';

const App = () => {
  return (
    <div id="app-container">
      <SWRConfig
        value={{
          fetcher: (...args) => fetch(...args).then(res => res.json())
        }}
      >
        <h4>vimeo player:</h4>
        <Vimeo /><br></br>
        <h4>Star Wars:</h4>
        <StarWarsActor />
      </SWRConfig>
    </div>
  );
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
