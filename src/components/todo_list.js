import React from 'react';

const TodoList = ({todo, completeTodo, removeTodo}) => (
  todo.map((item, index) => (
    <li key={item.key}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => completeTodo(index, { ...item, completed: !item.completed})}
      />
      <span>{item.text}</span>
      <button onClick={() => removeTodo(index)}>移除</button>
    </li>
  ))
)

export default TodoList;