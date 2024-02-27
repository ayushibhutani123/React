import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './OpenModal.css';
import { v4 as uuidv4 } from 'uuid';
export default function OpenModal({ onClose, handleCreateProject }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  function handleClick(event) {
    event.preventDefault();
    const newProject = {
      id: uuidv4(),
      title: title,
      description: description,
      dueDate: dueDate
    };
    console.log("New project ID:", newProject.id);
    handleCreateProject(newProject);
  }
 

  return createPortal(
    <div className="modal">
      <div className="modal-content">
        <form className='form-project'>
          <label>Title</label>
          <input type="text" className="input-field" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
          
          <label>Description</label>
          <textarea className="input-field" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          
          <label>Due Date</label>
          <input type="date" className="input-field" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
  
          <button onClick={handleClick}>Create Project</button>
        </form>
      </div>
    </div>,
    document.getElementById('modal-root') 
  );
}