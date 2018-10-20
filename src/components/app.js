import React, { Component } from 'react';

import update from 'immutability-helper';
import uuid from 'uuid/v4';

import NewTodo from './new_todo';
import TodoList from './todo_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    }
    this.addNewTodo = this.addNewTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addNewTodo(text) {
    const newItem = {
      text,
      key: uuid(),
      completed: false
    }
    this.setState({
      todoList: [...this.state.todoList, newItem]
    })
  }

  completeTodo(index, item) {
    const todoList = update(this.state.todoList, {
      [index]: {$set: item}
    });
    this.setState({ todoList })
  }

  removeTodo(index) {
    const todoList = update(this.state.todoList, {
      $splice: [[index, 1]]
    });
    this.setState({ todoList });
  }

  render() {
    const todoList = this.state.todoList;
    const hasTodoList = todoList.length > 0;
    return (
      <div className="main">
        <h1 className="title">todos</h1>
        <NewTodo addNewTodo={this.addNewTodo}/>
        { hasTodoList && (
          <ul className="list">
            <TodoList
              todo={todoList}
              completeTodo={this.completeTodo}
              removeTodo={this.removeTodo}
            />
          </ul>
        )}
      </div>
    );
  }
}
export default App;