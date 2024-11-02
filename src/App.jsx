import { useState } from "react";
import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject addNewProject={addNewProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected handleCreateClick={updateProjectId} />;
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

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar handleCreateClick={updateProjectId} />
      {content}
    </main>
  );
}

export default App;
