import React from 'react'
import { Tasks } from './Tasks';

export const SelectedProject = ({
  project,
  onDeleteProject,
  onAddTasks,
  onTasks,
  onDeleteTasks,
}) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 pb-2">
            {project.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-900"
            onClick={onDeleteProject}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks
        onAddTask={onAddTasks}
        tasks={onTasks}
        onDeleteTask={onDeleteTasks}
      />
    </div>
  );
};