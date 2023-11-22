import React from 'react';
import './Todo.css';

export default function Todo({ todo, todoList, setTodoList }) {
  const handleDelete = () => {
    const todos = JSON.parse(todoList);
    setTodoList(JSON.stringify(todos.filter((task) => todo.id !== task.id)));
  };

  return (
    <div className="task">
      <span className="priority">{todo.priority}</span>
      <span className="title">{todo.title}</span>
      <button className="close-btn" onClick={handleDelete}>
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );
}
