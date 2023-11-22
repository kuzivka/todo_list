import React from 'react';
import './Todo.css'

export default function Todo({ todo }) {
  return (
    <div key={todo.id} className="task">
      <span>{todo.proority}</span>
      <span>{todo.title}</span>
      <button className=' close-btn'><span class="material-symbols-outlined">close</span></button>
      
    </div>
  );
}
