import React, { useEffect, useState } from 'react';
import './ToDoListStyle.css';
import AddTodo from '../add-todo/AddTodo';
import Todo from '../todo/Todo';

export default function ToDoList() {
  const [todoList, setTodoList] = useState(() => {
    const hasPreviousState = localStorage.hasOwnProperty('todo-list');
    if (hasPreviousState) {
      return localStorage.getItem('todo-list');
    } else {
      return '[]';
    }
  });

  useEffect(() => {
    localStorage.setItem('todo-list', todoList);
  }, [todoList]);

  return (
    <div className="todo-list-container">
      <h1 className="list-title">To Do List</h1>
      <AddTodo setTodoList={setTodoList} todoList={todoList} />
      <div className="todos">
        {JSON.parse(todoList)
          .sort((a, b) => b.priority - a.priority)
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              setTodoList={setTodoList}
              todoList={todoList}
            />
          ))}
      </div>
    </div>
  );
}
