import { useState } from "react";

const AddProjectView = function ({ items, onSaveHandler }) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputDate, setInputDate] = useState("");

  function handleTitleChange(e) {
    setInputTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setInputDescription(e.target.value);
  }

  function handleDateChange(e) {
    setInputDate(e.target.value);
  }

  const handleSubmit = function (e) {
    console.log(items, onSaveHandler);
    e.preventDefault();
    const newProject = {
      title: inputTitle,
      description: inputDescription,
      date: inputDate,
    };

    onSaveHandler(newProject);

    setInputTitle("");
    setInputDescription("");
    setInputDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-24 text-left w-1/2">
      <div className="flex items-center justify-end gap-4 my-4">
        <button type="reset" className="text-stone-800 hover:text-stone-950">
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        >
          Save
        </button>
        <p>{inputTitle}</p>
      </div>
      <label className="text-sm font-bold uppercase text-stone-500">
        title
      </label>
      <input
        type="text"
        value={inputTitle}
        onChange={handleTitleChange}
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
      />
      <label className="text-sm font-bold uppercase text-stone-500">
        description
      </label>
      <textarea
        type="text"
        value={inputDescription}
        onChange={handleDescriptionChange}
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        rows="2"
      />
      <label className="text-sm font-bold uppercase text-stone-500">
        due date
      </label>
      <input
        type="date"
        value={inputDate}
        onChange={handleDateChange}
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
      />
    </form>
  );
};

export default AddProjectView;
