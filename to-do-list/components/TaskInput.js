import { useState } from "react";

const TaskInput = ({
  addTask,
  editTaskId,
  editText,
  setEditText,
  saveEdit,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [reminderTime, setReminderTime] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTaskId) {
      saveEdit();
    } else {
      addTask(inputValue, reminderTime); 
    }
    setInputValue("");
    setReminderTime("");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setEditText(value);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={editTaskId ? editText : inputValue}
        onChange={handleChange}
        placeholder="Add a new task"
        className="border border-gray-300 p-2 rounded w-full mb-2"
      />
      <input
        type="datetime-local"
        value={reminderTime}
        onChange={(e) => setReminderTime(e.target.value)}
        placeholder="Set a reminder"
        className="border border-gray-300 p-2 rounded w-full mb-2"
      />
      <button
        type="submit"
        className={`mt-2 w-full p-2 text-white rounded-md ${
          editTaskId
            ? "bg-green-500 hover:bg-green-400"
            : "bg-blue-500 hover:bg-blue-400"
        }`}
      >
        {editTaskId ? "Save" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskInput;
