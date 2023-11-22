import React, { useState } from 'react';
import './ToDoListStyle.css';
import AddTodo from '../add-todo/AddTodo';
import Todo from '../todo/Todo';

export default function ToDoList() {
  const [todoList, setTodoList] = useState('[]');

  // useEffect(())
  return (
    <div className="todo-list-container">
      <h1 className="list-title">To Do List</h1>
      <AddTodo setTodoList={setTodoList} todoList={todoList} />
      <div className="todos">
        {JSON.parse(todoList).map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
    </div>
  );
}
