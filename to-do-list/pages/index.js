import { useState, useEffect } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editText, setEditText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Load tasks from local storage on component mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Update local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (taskText, reminderTime = null) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), text: taskText, completed: false, reminderTime },
    ]);
  };

  // Toggle completion status of a task
  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Clear all tasks
  const clearTasks = () => {
    setTasks([]);
  };

  // Start editing a task
  const startEditing = (taskId, taskText) => {
    setEditTaskId(taskId);
    setEditText(taskText);
  };

  // Save edited task
  const saveEdit = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === editTaskId ? { ...task, text: editText } : task
      )
    );
    setEditTaskId(null);
    setEditText("");
  };

  // Filtered tasks based on search term
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Reminder Notifications
  useEffect(() => {
    const now = new Date().getTime();
    tasks.forEach((task) => {
      if (task.reminderTime && new Date(task.reminderTime).getTime() <= now) {
        new Notification("Reminder", { body: task.text });
        task.reminderTime = null;
      }
    });
  }, [tasks]);

  return (
    <div className="container mx-auto max-w-md p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-center text-2xl font-bold mb-4">To-Do List</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search tasks"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 border border-gray-300 p-2 rounded w-full"
      />

      <TaskInput
        addTask={addTask}
        editTaskId={editTaskId}
        editText={editText}
        setEditText={setEditText}
        saveEdit={saveEdit}
      />

      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        startEditing={startEditing}
      />

      <button
        onClick={clearTasks}
        className="mt-6 w-full p-2 bg-red-500 text-white rounded-md hover:bg-red-400 transition"
      >
        Clear All Tasks
      </button>
    </div>
  );
};

export default Index;
