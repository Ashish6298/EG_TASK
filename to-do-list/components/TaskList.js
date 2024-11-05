import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleTask, deleteTask, startEditing }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          startEditing={startEditing}
        />
      ))}
    </div>
  );
};

export default TaskList;
