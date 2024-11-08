import Button from "./Button";

export default function SideBar({
  projects,
  handleCreateClick,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase">Your Projects</h2>
      <div>
        <Button onClick={handleCreateClick}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((eachProject) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded  my-1 hover:text-stone-200 hover:bg-stone-800";

          if (eachProject.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={eachProject.id}>
              <button
                className={cssClasses}
                onClick={() => {
                  onSelectProject(eachProject.id);
                }}
              >
                {eachProject.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
