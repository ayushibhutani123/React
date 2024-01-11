import React, { useContext } from 'react';
import { myContent } from './Parent';

export default function Child1() {
    const storetheme=useContext(myContent)
  return (
    <div>
      <h1>Theme:{storetheme}</h1>
    </div>
  );
}
