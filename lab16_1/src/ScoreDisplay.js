import React from 'react';
// since i upgraded to react 17, i wander why i still had to import react here...
export default function ScoreDisplay({ score }) {
    return (
      <div>
        Score:<span>{score}</span>
      </div>
    );
  }