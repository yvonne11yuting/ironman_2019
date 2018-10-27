import React from 'react';
import { connect } from 'react-redux';
import { completeTodo, removeTodo } from '../../actions';

import TodoList from './TodoList';

const TodoListContainer = ({todo, completeTodo, removeTodo}) => {
  let hasTodo = todo.length;
  return hasTodo ? (
    <TodoList
      todo={todo}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
    />
  ) : null;
};

export default connect(({todoList}) => ({
  todo: todoList
}), {
  completeTodo, removeTodo
})(TodoListContainer);