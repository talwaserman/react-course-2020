import React, { useState } from 'react';
// since i upgraded to react 17, i wander why i still had to import react here...
export default function UserDetails({ data, setData, moveToNext }) {
  const { userName, userPassword, userState, userCity } = data;

  return (
    <div>
      <h3>User information:</h3>
      <div>
        <label className="form-label">user name:</label>
        <input
          type="text"
          value={userName}
        ></input>
      </div>
      <div>
        <label className="form-label">user password:</label>
        <input
          type="text"
          value={userPassword}
        ></input>
      </div>
      <div>
        <label className="form-label">user state:</label>
        <input
          type="text"
          value={userState}
        ></input>
      </div>
      <div>
        <label className="form-label">user city:</label>
        <input
          type="text"
          value={userCity}
        ></input>
      </div>
    </div>
  );

  function updateData(value, field) {
    const updatedData = { ...localData, [field]: value };
    setlocalData(updatedData);
  }

  function onSave() {
    const updatedData = { ...data, ...localData };
    setData(updatedData);
    moveToNext();
  }
}
