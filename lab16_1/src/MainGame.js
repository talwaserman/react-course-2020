import React from 'react';

export default function MainGame({ redLocation, setRedLocation, setScore }) {
    return (
      <div>
        <button className="new-game-btn" onClick={onNewGameClick}>
          New game
        </button>
        <div>
          {_.range(10).map(i => {
            const color = i === redLocation ? 'red' : 'lightGray';
            return (
              <div
                key={i}
                className="cell"
                onClick={onClickCell}
                style={{ background: color }}
              ></div>
            );
          })}
        </div>
      </div>
    );
  
    function onClickCell(e) {
      if (e.target.style.background === 'red') {
        setScore(p => p + 10);
        setRedLocation(_.random(0, 9));
      } else {
        setScore(p => (p <= 5 ? 0 : p - 5));
      }
    }
  
    function onNewGameClick() {
      setScore(0);
      setRedLocation(_.random(0, 9));
    }
  }