import React from 'react';
import { connect } from 'react-redux';
import { completeTodo, removeTodo } from '../actions/';

import TodoListItem from './todo_list_item';

const TodoList = ({todo, completeTodo, removeTodo}) => {
  return todo.length ? (
    <ul className="list">
      <TodoListItem
        todo={todo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </ul>
  ): null
};

const mapStateToProps = ({todoList}) => ({
  todo: todoList
})

const mapDispatchToProps = {
  completeTodo, removeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);