import React from 'react';
import './Project.css';

export default function Project({ projects, proState }) {
  const handleProjectClick = (projectId) => {
    proState(projectId);
  };

  return (
    <div className='container'>
      <h2>YOUR PROJECTS</h2>
      <button>+Add Project</button>
      <div className="project-titles">
        {projects.map((project) => (
          <p key={project.id} onClick={() => handleProjectClick(project.id)}>
            {project.title}
          </p>
        ))}
      </div>
    </div>
  );
}
