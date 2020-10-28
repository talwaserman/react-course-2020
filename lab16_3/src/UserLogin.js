import React, {useState} from 'react';
// since i upgraded to react 17, i wander why i still had to import react here...
export default function UserLogin({ data, setData, moveToNext }) {
  const {userName, userPassword} = data;
  const [localData, setlocalData] = useState({
    userName,
    userPassword
  })
  return (
    <div>
      <h3>User Login:</h3>
      <div>
        <label className='form-label'>user name:</label>
        <input type="text" value={localData.userName} onChange={(e => updateData(e.target.value, 'userName'))}></input>
      </div>
      <div>
        <label className='form-label'>user password:</label>
        <input type="password" value={localData.userPassword} onChange={(e => updateData(e.target.value, 'userPassword'))}></input>
      </div>

      <button style={{marginBottom: '20px'}} onClick={onSave}>Save</button>
    </div>
  );

  function updateData(value, field) {
    const updatedData = {...localData, [field]: value};
    setlocalData(updatedData);
  }

  function onSave() {
    const updatedData = {...data ,...localData};
    setData(updatedData);
    moveToNext();
  }
}
