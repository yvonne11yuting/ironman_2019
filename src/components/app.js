import React from 'react';

import NewTodo from './new_todo';
import TodoList from './todo_list';

const App = () => {
  return (
    <div className="main">
      <h1 className="title">todos</h1>
      <NewTodo/>
      <TodoList/>
    </div>
  );
}

export default App;