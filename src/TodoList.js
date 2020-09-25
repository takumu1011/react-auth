import React from 'react';
import Todo from './Todo';

function TodoList(props) {
  const todoList = props.todos.map((todo, index) => {
    return <Todo key={index} todo={todo} onRemove={props.onRemove} onToggle={props.onToggle} />;
  });
  return <ul className="todo-list">{todoList}</ul>;
}

export default TodoList;
