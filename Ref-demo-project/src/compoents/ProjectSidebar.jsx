import Button from "./Button.jsx";

export default function ProjectSidebar({ onStartAddProject }) {
  return (
    <>
      <aside className="px-8 py-16 bg-slate-900 text-stone-50 w-1/3 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          Your Projects
        </h2>
        <div>
          <Button onClick={onStartAddProject}>+ Add Project</Button>
        </div>
        <ul>test</ul>
      </aside>
    </>
  );
}
