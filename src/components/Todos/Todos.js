import React from 'react';

import NewTodoContainer from './NewTodoContainer';
import TodoListContainer from './TodoListContainer';
import TodoFilterConatiner from './TodoFilterConatiner';

const Todos = () => {
  return (
    <main className="main">
      <h1 className="title">todos</h1>
      <NewTodoContainer/>
      <TodoListContainer/>
      <TodoFilterConatiner/>
    </main>
  );
}

export default Todos;