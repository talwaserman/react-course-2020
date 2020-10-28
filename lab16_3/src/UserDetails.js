import React, {useState} from 'react';
// since i upgraded to react 17, i wander why i still had to import react here...
export default function UserDetails({ data, setData, moveToNext }) {
  const {userState, userCity} = data;
  const [localData, setlocalData] = useState({
    userState,
    userCity
  })
  return (
    <div>
      <h3>User Address:</h3>
      <div>
        <label className='form-label'>user state:</label>
        <input type="text" value={localData.userState} onChange={(e => updateData(e.target.value, 'userState'))}></input>
      </div>
      <div>
        <label className='form-label'>user city:</label>
        <input type="text" value={localData.userCity} onChange={(e => updateData(e.target.value, 'userCity'))}></input>
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
