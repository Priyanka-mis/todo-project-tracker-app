import React from 'react';

function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p className="no-tasks">No tasks yet. Add one!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}  // Toggle task completion
            />
            {task.text}
          </label>
          <button onClick={() => onDelete(task.id)}>❌</button>  {/* Delete task */}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
