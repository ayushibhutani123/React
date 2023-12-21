import React from 'react';

export default function Print({array}) {
    
  return (
    <div className="printcontainer">
      <h2>Submitted Details:</h2>
    {array.map((item, index) => (
        <div key={index}>
          <h5>FirstName: {item.FirstName}</h5>
          <h5>LastName: {item.LastName}</h5>
          <h5>Gender: {item.Gender}</h5>
        </div>
      ))}
    </div>
  );
}
   
 