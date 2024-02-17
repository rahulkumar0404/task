import React from 'react';
import { Button } from './Button';
export const Sidebar = ({
  onStartAddProject,
  projects,
  onSelectedProject,
  selectedProjectId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <Button onClick={onStartAddProject}>+ Add Projects</Button>
      <ul className="mt-8">
        {projects.map((project) => {
          let buttonCssClasses =
            'w-full my-2 rounded-sm text-left px-2 py-1 hover:text-stone-100 hover:bg-stone-800';
          if (project.id === selectedProjectId) {
            buttonCssClasses += ' text-stone-300 bg-stone-800';
          } else {
            buttonCssClasses += 'text-stone-300';
          }
          return (
            <li key={project.id}>
              <button
                className={buttonCssClasses}
                onClick={() => onSelectedProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
