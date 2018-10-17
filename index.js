import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import update from 'immutability-helper';
import uuid from 'uuid/v4';

import NewTodo from './src/components/new_todo';
import TodoList from './src/components/todo_list';

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
      <div>
        <NewTodo addNewTodo={this.addNewTodo}/>
        { hasTodoList && (
          <ul key="componentTodoList">
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

ReactDOM.render(<App/>, document.getElementById('app'));