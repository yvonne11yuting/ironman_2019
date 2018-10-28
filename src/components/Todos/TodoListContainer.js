import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { completeTodo, removeTodo } from '../../actions';

import TodoList from './TodoList';

const TodoListContainer = ({todo, completeTodo, removeTodo, ...props}) => {
  let hasTodo = todo.length;
  return hasTodo ? (
    <TodoList
      todo={todo}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
    />
  ) : null;
};

const mapStateToProps = ({todoList}, {location:{search}}) => {
  let params = new URLSearchParams(search.substring(1));
  let state = params.get('state');
  let completed = state === "completed" ? true : false;
  let todo = state ? todoList.filter(item => item.completed === completed) : todoList;
  return { todo };
}

export default compose(
  withRouter,
  connect(mapStateToProps, {
    completeTodo, removeTodo
  })
)(TodoListContainer);