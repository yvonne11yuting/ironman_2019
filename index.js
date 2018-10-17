import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NewTodo from './src/components/new_todo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    }
    this.addNewTodo = this.addNewTodo.bind(this);
  }

  addNewTodo(text) {
    let newItem = {
      text,
      completed: false
    }
    this.setState({
      todoList: [...this.state.todoList, newItem]
    })
  }

  render() {
    return (
      <div>
        <NewTodo addNewTodo={this.addNewTodo}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));