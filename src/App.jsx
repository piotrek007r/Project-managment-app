import Aside from "./Aside";
import NoProjectView from "./NoProjectView";
import { useState, useRef } from "react";
import AddProjectView from "./AddProjectView";

function App() {
  const [isNoPoject, setisNoProject] = useState(false);
  const [projectList, setProjects] = useState([]);

  function handleProject(newProject) {
    setProjects((prevProjects) => {
      return [newProject, ...prevProjects];
    });
  }

  console.log(projectList);

  return (
    <main className="h-screen my-8 flex gap-8">
      <Aside projects={projectList} />
      {isNoPoject && <NoProjectView />}
      <AddProjectView items={projectList} onSaveHandler={handleProject} />
      <div></div>
    </main>
  );
}

export default App;
