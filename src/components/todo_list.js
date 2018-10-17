import React from 'react';

const TodoList = ({todo, completeTodo, removeTodo}) => (
  todo.map((item, index) => (
    <li key={item.key} className="list-item">
      <input
        type="checkbox"
        id={item.key}
        className="list-item-complete"
        onChange={() => completeTodo(index, { ...item, completed: !item.completed})}
      />
      <label htmlFor={item.key}>{item.text}</label>
      <button className="btn" onClick={() => removeTodo(index)}>移除</button>
    </li>
  ))
)

export default TodoList;