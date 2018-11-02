import React from 'react';
import { FormattedMessage } from "react-intl";

import NewTodoContainer from './NewTodoContainer';
import TodoListContainer from './TodoListContainer';
import TodoFilterConatiner from './TodoFilterConatiner';

const Todos = () => {
  return (
    <main className="main">
      <h1 className="title"><FormattedMessage id="todos" description="to-do list"/></h1>
      <NewTodoContainer/>
      <TodoListContainer/>
      <TodoFilterConatiner/>
    </main>
  );
}

export default Todos;