import { useState } from "react";
import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function updateActiveScreen() {
    const selectedProjectId = projectState.projects.find(
      (project) => project.id === projectState.selectedProjectId
    );

    let content = <SelectedProject project={selectedProjectId} />;

    if (projectState.selectedProjectId === null) {
      content = (
        <NewProject onClose={handleCloseProject} onAddProject={addNewProject} />
      );
    } else if (projectState.selectedProjectId === undefined) {
      content = <NoProjectSelected handleCreateClick={updateProjectId} />;
    }

    return content;
  }

  function updateProjectId() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function addNewProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCloseProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  const content = updateActiveScreen();

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        projects={projectState.projects}
        handleCreateClick={updateProjectId}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
