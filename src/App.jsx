import { useState } from 'react';
import NewProject from './components/NewProject';
import { NoProjectSelected } from './components/NoProjectSelected';
import { Sidebar } from './components/Sidebar';
import { SelectedProject } from './components/SelectedProject';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleProject(value) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: value,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  function handleAddTasks(text) {
    setProjectState((prevState) => {
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: Math.random(),
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTasks(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  const getSelectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  let content = (
    <SelectedProject
      project={getSelectedProject}
      onDeleteProject={handleDeleteProject}
      onAddTasks={handleAddTasks}
      onTasks={projectState.tasks}
      onDeleteTasks={handleDeleteTasks}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancelProject={() => handleProject(undefined)}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected onStartAddProject={() => handleProject(null)} />
    );
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={() => handleProject(null)}
        projects={projectState.projects}
        onSelectedProject={handleProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
