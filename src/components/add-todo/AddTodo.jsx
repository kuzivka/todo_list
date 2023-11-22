import React, { useId, useState } from 'react';
import './AddTodoStyle.css';

export default function AddTodo({ setTodoList, todoList }) {
  const [titleState, setTitleState] = useState('');
  const [prorityState, setPriorityState] = useState(0);

  const id = () => Date.now().toString(36);

  const handleTitleInput = (e) => {
    setTitleState(e.target.value);
  };
  const handlePriorityInput = (e) => {
    setPriorityState(e.target.value);
  };

  const addTodo = () => {
    const list = JSON.parse(todoList);
    list.push({ id: id(), title: titleState, priority: prorityState });
    setTodoList(JSON.stringify(list));
  };

  const debounce = (func) => {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(func, 500);
    };
  };
  return (
    <div className="add-todo-container">
      <input
        className="title-input"
        type="text"
        value={titleState}
        placeholder="Title..."
        onChange={(e) => debounce(handleTitleInput(e))}
      />
      <input
        className="priority-input"
        min={0}
        value={prorityState}
        type="number"
        onChange={(e) => debounce(handlePriorityInput(e))}
      />
      <button className="add-btn" onClick={addTodo}>
        Add
      </button>
    </div>
  );
}
