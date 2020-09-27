import React from 'react';

function Todo(props) {
  return (
    <li className="todo-item">
      <input
        className="todo-check"
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.onToggle(props.todo)}
      />
      <span
        style={{ textDecoration: props.todo.completed ? 'line-through' : '' }}
      >
        {props.todo.title}
      </span>
      <button
        className="todo-delete"
        onClick={() => props.onRemove(props.todo)}
      >
        <i class="fas fa-trash-alt fa-2x"></i>
      </button>
    </li>
  );
}

export default Todo;
