import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import DisplayList from './DisplayList';
import FilterList from './FilterList';
import './style.css';

const App = () => {
  const [input, setInput] = useState('');
  const list = ['build home', 'buy milk', 'finish lab 16', 'upgrade to react 17'];

  return (
    <div id="app-container">
      <FilterList setInput={setInput} input={input}/>
      <DisplayList list={list.filter(item => item.includes(input))} />
    </div>
  );
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
