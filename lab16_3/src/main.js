import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import UserLogin from './UserLogin';
import UserDetails from './UserDetails';
import UserInfo from './UserInfo';
import './style.css';

const App = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    userName: '',
    userPassword: '',
    userState: '',
    userCity: ''
  });

  return (
    <div id="app-container">
      {page === 0 && <UserLogin data={data} setData={setData} moveToNext={moveToNext}/>}
      {page === 1 && <UserDetails data={data} setData={setData} moveToNext={moveToNext}/>}
      {page === 2 && <UserInfo data={data} setData={setData}/>}
      <nav>
        {page > 0 && <button onClick={e => setPage(p => p - 1)}>Prev</button>}
        {page < 3 && <button onClick={e => setPage(p => p + 1)}>Next</button>}
      </nav>
    </div>
  );

  function moveToNext() {
    setPage(p => p + 1);
  }
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
