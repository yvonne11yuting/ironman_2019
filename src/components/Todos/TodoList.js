import React from "react";
import { FormattedMessage } from "react-intl";

const TodoListItem = ({ todo, completeTodo, removeTodo }) =>
  todo.map(item => (
    <li key={item.key} className="list-item">
      <input
        type="checkbox"
        id={item.key}
        className="list-item-complete"
        checked={item.completed}
        onChange={() => completeTodo(item.key)}
      />
      <label htmlFor={item.key}>{item.text}</label>
      <button className="btn" onClick={() => removeTodo(item.key)}>
        <FormattedMessage id="remove"/>
      </button>
    </li>
  ));

const TodoList = ({ todo, completeTodo, removeTodo }) => (
  <ul className="list">
    <TodoListItem
      todo={todo}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
    />
  </ul>
);

export default TodoList;
