const NoProjectView = function () {
  return (
    <diiv className="w-[35rem] mt-16 flex flex-col items-center">
      <img
        src="src\assets\no-projects.png"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-700 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-600 mb-4">
        Select a project or get started with a new one
      </p>
      <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
        Create new project
      </button>
    </diiv>
  );
};

export default NoProjectView;
