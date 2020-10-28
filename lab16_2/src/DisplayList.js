import React from 'react';
// since i upgraded to react 17, i wander why i still had to import react here...
export default function DisplayList({ list }) {
    return (
      <ul>
        {list.map((item, index) => <li key={index}>{index+1}.{item}</li>)}
      </ul>
    );
  }