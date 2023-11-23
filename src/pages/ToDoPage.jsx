import React from 'react';
import './ToDoPageStyle.css';
import Bubbles from '../assets/buubles.png';
import ToDoList from '../components/todo-list/ToDoList';

export default function ToDoPage() {
  return (
    <div className="todo-page">
      <ToDoList />
      <img className="bubbles" src={Bubbles} alt="bubles" />
    </div>
  );
}
