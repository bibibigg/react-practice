import NewProject from "./compoents/NewProject";
import NoProjectSelected from "./compoents/NoProjectSelected";
import ProjectSidebar from "./compoents/ProjectSidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
