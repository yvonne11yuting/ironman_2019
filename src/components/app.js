import React from 'react';

import NewTodoContainer from './NewTodo/NewTodoContainer';
import TodoListContainer from './TodoList/TodoListContainer';

const App = () => {
  return (
    <div className="main">
      <h1 className="title">todos</h1>
      <NewTodoContainer/>
      <TodoListContainer/>
    </div>
  );
}

export default App;