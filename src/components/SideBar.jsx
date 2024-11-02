import Button from "./Button";

export default function SideBar({ projects, handleCreateClick }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase">Your Projects</h2>
      <div>
        <Button onClick={handleCreateClick}>+ Add Project</Button>
      </div>
      <ul>
        {projects.map((eachProject) => (
          <li className="mt-8" key={eachProject.id}>
            <button className="w-full text-left px-2 py-1 rounded  my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
              {eachProject.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
