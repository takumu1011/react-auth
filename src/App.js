import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
const DEFAULT_TODOS = [
  { title: 'このページを見る', completed: true },
  { title: 'どこかへをクリックしてみる', completed: false },
  { title: 'タスクを完了してみる。', completed: false },
  { title: 'タスクを追加してみる', completed: false },
  { title: 'タスクを削除してみる', completed: false },
  { title: '秘密のキーワードを見つける', completed: false },
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: DEFAULT_TODOS,
      newTodo: '',
      secretKey: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.onToggle = this.onToggle.bind(this);

    this.move = this.move.bind(this);
  }
  onChange(e) {
    const { value } = e.target;
    this.setState({
      newTodo: value,
    });
  }
  onSubmit(e) {
    const { todos, newTodo } = this.state;
    e.preventDefault();
    if (!newTodo.trim()) {
      return;
    }
    const newTodos = todos.slice();
    newTodos.push({
      title: newTodo,
      completed: false,
    });
    this.setState({
      todos: newTodos,
      newTodo: '',
    });
  }
  onRemove(todo) {
    const { todos } = this.state;
    const index = todos.indexOf(todo);
    if (index > -1) {
      const newTodos = todos.slice();
      newTodos.splice(index, 1);
      this.setState({
        todos: newTodos,
      });
    }
  }
  onToggle(todo) {
    const { todos } = this.state;
    const index = todos.indexOf(todo);
    if (index > -1) {
      const newTodos = todos.slice();
      todo.completed = !todo.completed;
      newTodos.splice(index, 1, todo);
      this.setState({
        todos: newTodos,
      });
    }
    const completed = todos.filter((todo) => {
      return todo.completed === false;
    });
    if (completed.length === 0) {
      this.setState({
        secretKey: '秘密のキーワードは「winner」',
      });
      window.sessionStorage.setItem(['secretKey'], ['code999']);
    }
  }
  move() {
    window.location.href = 'index2.html';
  }
  render() {
    return (
      <div className="todo">
        <p>{this.state.secretKey}</p>
        <TodoForm value={this.state.newTodo} onChange={this.onChange} onSubmit={this.onSubmit} />
        <TodoList todos={this.state.todos} onRemove={this.onRemove} onToggle={this.onToggle} />
        <p onClick={this.move} className="moveBtn">
          どこかへ
        </p>
      </div>
    );
  }
}

export default App;
