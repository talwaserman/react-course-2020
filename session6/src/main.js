import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container';
import { SWRConfig } from 'swr'

import '../css/main.css';

const App = () => {
  return (
    <SWRConfig
      value={{
        fetcher: (...args) => fetch(...args).then(res => res.json())
      }}
    >
      <Container />
    </SWRConfig>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
