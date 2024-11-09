import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProject } from '../../store/projectsSlice';
import type { RootState } from '../../store';
import type { Project } from '../../types';

const Sidebar = () => {
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.projects);

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectName.trim()) return;
    
    dispatch(addProject({ name: newProjectName }));
    setNewProjectName('');
    setIsAddingProject(false);
  };

  return (
    <div className="p-4">
      <button 
        onClick={() => setIsAddingProject(true)}
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Add Project
      </button>

      {isAddingProject && (
        <form onSubmit={handleAddProject} className="mt-4">
          <input
            type="text"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Project name"
            autoFocus
          />
        </form>
      )}

      <div className="mt-4">
        <label className="text-sm text-gray-500">Projects</label>
        <div className="mt-2 space-y-2">
          {projects.map((project: Project) => (
            <div key={project.id} className="p-2 hover:bg-gray-100 rounded cursor-pointer">
              {project.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 