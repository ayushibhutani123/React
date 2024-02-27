import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import {createPortal} from 'react-dom';

const ResultsModal = forwardRef(function ResultsModal({ onReset,targetTime,remainingTime}, ref) {
  const dialog = useRef(null);
  const userLost=remainingTime<=0;
  const formattedRemainingTime=(remainingTime/1000).toFixed(2);
  const score=Math.round((1-remainingTime/(targetTime*1000))*100);

  useImperativeHandle(ref, () => ({
    open: () => {
      
        dialog.current.showModal();
      
    }
  }));

  return createPortal(
    <dialog ref={dialog} className='result-modal'>
     {userLost && <h2> You lost</h2>}
     {!userLost && <h2>Your Score:{score}</h2>}
      <p>The target time <strong>{targetTime} seconds.</strong></p>
      <p>You Stopped the timer with <strong>{formattedRemainingTime}seconds left.</strong></p>
      <form method="dialog">
        <button onClose={onReset}>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultsModal;
