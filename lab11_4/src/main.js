import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

import './style.css';

const ColorPicker = ({initialColor = "#fff"}) => {
  const [selected, setSelected] = useState(initialColor);
  const [colorArray, setColorArray] = useState(
    [...Array(Number(40)).keys()].map(i => generateColors())
  );
  return (
    <div id="app-container">
      <div className="color-box selected" style={{ background: selected }}></div>
      <div className="colors-container">
        {colorArray.map((color, i) => (
          <div
            className="color-box"
            key={i}
            style={{ background: color }}
            onClick={e => onColorClick(i)}
          ></div>
        ))}
      </div>
    </div>
  );

  function onColorClick(index) {
    setSelected(colorArray[index]);
  }

  function generateColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}

const App = () => <ColorPicker initialColor={"#FB3465"}/>;

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
