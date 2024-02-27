import React, { useState } from 'react';
import './ProjectDetail.css'; 

export default function ProjectDetails({ project, onDelete }) {
  const [inputVal, setInputVal] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputValueChange = (event) => {
    setInputVal(event.target.value);
  }
  const handleDeleteProject = () => {
   
    onDelete(project.id);
  }
  const handleAddTask = () => {
    if (inputVal.trim() !== '') {
      setTasks([...tasks, inputVal]);
      setInputVal('');
    }
  }

  const handleClear = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }
  return (
    <div className="project-details-container">
      <div className="title-container">
        <h1 className="project-title">{project.title}</h1>
        <button className="delete-button"  onClick={handleDeleteProject}>Delete</button>
      </div>
      <h5 className="due-date">{project.dueDate}</h5>
      <p className="description">{project.description}</p>
      <hr className='divider'></hr>
      <h3 className='task'> Tasks</h3>
      
      <div className="input-container">
        <input onChange={handleInputValueChange} value={inputVal} className='input-task' />
        <button className='add-task' onClick={handleAddTask}>Add Task</button>
        
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-item">
            <p className="inpu">{task}</p>
            <button className='clear-btn' onClick={handleClear}>Clear</button>
          </div>
        ))}
      </div>
    </div>
  );
}