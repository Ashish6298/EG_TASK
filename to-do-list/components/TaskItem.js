const TaskItem = ({ task, toggleTask, deleteTask, startEditing }) => {
  return (
    <div
      className={`flex justify-between items-center p-4 mb-2 rounded-lg transition-all transform hover:scale-105 ${
        task.completed ? "bg-green-100" : "bg-gray-100"
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="mr-2"
        />
        <span className={task.completed ? "line-through text-gray-500" : ""}>
          {task.text}
        </span>
      </div>
      <div>
        <button
          onClick={() => startEditing(task.id, task.text)}
          className="text-yellow-500 hover:text-yellow-400 mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-500 hover:text-red-400"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
