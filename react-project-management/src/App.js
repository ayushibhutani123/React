import React, { useState } from 'react';
import './App.css';
import CreateProject from './components/CreateProject';
import Project from './components/Project';
import ProjectDetails from './components/ProjectDetails';

export default function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
  };
  
  const onDelete = (projectId) => {
   const updatedProjects = projects.filter(project => project.id !== projectId);
    setProjects(updatedProjects);
   if (selectedProjectId === projectId) {
      setSelectedProjectId(null);
    }
  };
  const proState = (projectId) => {
    setSelectedProjectId(projectId);
  };

  return (
    <div className='flex-container'> 
      <div className='project'>
        <Project projects={projects} proState={proState} />
      </div>
      <div className='createproject'>
        <CreateProject
          projectState={selectedProjectId !== null}
          addProject={addProject}
        />
        {selectedProjectId && <ProjectDetails onDelete={onDelete} project={projects.find(project => project.id === selectedProjectId)} />}
      </div>
    </div>
  );
}
