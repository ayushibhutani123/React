import React, { useState } from 'react';
import './CreateProject.css';
import OpenModal from './OpenModal';

export default function CreateProject({ addProject, projectState }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleCreateProject(newProject) {
    addProject(newProject);
    setIsModalOpen(false);
  }

  return (
    <>
      {!isModalOpen && !projectState && (
        <div className="create-project-container">
          <h3 style={{ color: 'grey' }}>No Project Selected</h3>
          <button onClick={() => setIsModalOpen(true)}>Create New Project</button>
        </div>
      )}
      {isModalOpen && <OpenModal onClose={() => setIsModalOpen(false)} handleCreateProject={handleCreateProject} />}
    </>
  );
}
