import React from 'react';

function Todo(props) {
  return (
    <li className="todo-list">
      <input type="checkbox" checked={props.todo.completed} onChange={() => props.onToggle(props.todo)} />
      <span style={{ textDecoration: props.todo.completed ? 'line-through' : '' }}>{props.todo.title}</span>
      <button onClick={() => props.onRemove(props.todo)}>X</button>
    </li>
  );
}

export default Todo;
