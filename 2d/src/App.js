import React from 'react';

export default function App() {
  const nestedArray = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];

  const flattenedArray = [];

  function flattenArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattenArray(arr[i]);
      } else {
        flattenedArray.push(arr[i]);
      }
    }
  }

  function recursion(nestedArray) {
    for (let j = 0; j < nestedArray.length; j++) {
      if (Array.isArray(nestedArray[j])) {
        flattenArray(nestedArray[j]);
      } else {
        flattenedArray.push(nestedArray[j]);
      }
    }
  }

  recursion(nestedArray);

  return (
    <div>
      <div>
        <p>Original Nested Array: {JSON.stringify(nestedArray)}</p>
        <p>Flattened Array: {JSON.stringify(flattenedArray)}</p>
      </div>
    </div>
  );
}
