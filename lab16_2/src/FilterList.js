import React from 'react';

export default function FilterList({setInput, input}) {
    return (
      <input type="text" style={{width: '200'}} value={input} onChange={e => setInput(e.target.value)}></input>
    );
  }