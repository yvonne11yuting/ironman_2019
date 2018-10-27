import React from 'react';

import NewTodoContainer from './NewTodo/NewTodoContainer';
import TodoListContainer from './TodoList/TodoListContainer';

const Todos = () => {
  return (
    <main className="main">
      <h1 className="title">todos</h1>
      <NewTodoContainer/>
      <TodoListContainer/>
    </main>
  );
}

export default Todos;