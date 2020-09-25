import React from 'react';

function TodoForm(props) {
  return (
    <form className="todo-form" onSubmit={props.onSubmit}>
      <input className="todo-input" value={props.value} onChange={props.onChange} />
      <button type="submit">追加する</button>
    </form>
  );
}

export default TodoForm;
