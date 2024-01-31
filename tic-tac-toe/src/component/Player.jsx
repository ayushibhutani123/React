import React, { useState } from 'react';

export default function Player({ name, symbol, getValue}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handlePlayerName = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleSave = () => {
    setIsEditing(false);
    getValue(editedName);
  
  };

  return (
    <li>
      <span className="player">
        <span className="player-name">
          {isEditing ? <input type="text" onChange={handleInputChange} value={editedName} /> : name}
        </span>
        <span className="player-symbol">{symbol}</span>
      </span>
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handlePlayerName}>Edit</button>
      )}
    </li>
  );
}